<script setup lang="ts">
	import { useNavbarData } from '@/data/navbar-items'
	import { useAuthStore } from '@/stores/useAuth.store'
	import { TextAlignJustify, LogOut } from 'lucide-vue-next'
	import { ref } from 'vue'

	const authStore = useAuthStore()
	const navbarData = useNavbarData()

	const drawerCheckbox = ref<HTMLInputElement | null>(null) // 👈 referencia al checkbox

	const closeDrawer = () => {
		if (drawerCheckbox.value) {
			drawerCheckbox.value.checked = false
		}
	}

	const handleSignOut = async () => {
		await authStore.signOut()
		closeDrawer()
	}

	const handleNavigation = () => {
		closeDrawer()
	}
</script>

<template>
	<!-- drawer -->
	<div class="drawer bg-white">
		<input id="my-drawer-3" ref="drawerCheckbox" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<div
				class="navbar flex min-h-[2.5rem] w-full items-center justify-between gap-3 border-b-1 border-neutral-100 px-4 py-6"
			>
				<h1
					class="text-beils-70 inline-flex flex-1 cursor-default items-center gap-2 font-semibold select-none"
				>
					BEiLS
					<span class="text-xs font-light">BELLEZA HONESTA</span>
				</h1>
				<!-- <Avatar class="w-6" /> -->
				<div class="flex-none lg:hidden">
					<label for="my-drawer-3" aria-label="open sidebar">
						<TextAlignJustify :size="24" :color="'gray'" />
					</label>
				</div>

				<!-- Navbar menu content here -->
				<!-- <div class="hidden flex-none lg:block">
					<ul class="menu menu-horizontal">
						<li><a>Navbar Item 1</a></li>
						<li><a>Navbar Item 2</a></li>
					</ul>
				</div> -->
			</div>
		</div>
		<div class="drawer-side">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu bg-base-200 min-h-full w-80 p-4">
				<li
					v-for="menuLabel of navbarData.items"
					:key="menuLabel.name"
					@click="handleNavigation"
				>
					<RouterLink :to="menuLabel.to" class="text-lg">
						<i :data-lucide="menuLabel.icon"></i>
						{{ menuLabel.name }}
					</RouterLink>
				</li>
				<li @click="handleSignOut">
					<span class="text-lg">
						<LogOut />
						Cerrar sesión
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>
