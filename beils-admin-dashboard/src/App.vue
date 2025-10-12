<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import AppMainLayout from '@layouts/AppMainLayout.vue'
	import NavbarCustom from './components/Navbar/NavbarCustom.vue'
	import Breadcumbs from './components/commons/Breadcumbs.vue'
	import { useAuthStore } from './stores/auth.store'
	import Avatar from './components/commons/Avatar.vue'
	import Dropdown from './components/commons/Dropdown.vue'
	import { useBreadcrumbsStore } from './stores/breadcrumbs.store'

	const breadcrumbsStore = useBreadcrumbsStore()

	const authStore = useAuthStore()
</script>

<template>
	<AppMainLayout class="bg-white overflow-x-hidden">
		<template #header>
			<!-- HEADER -->
			<header class="header relative h-fit">
				<NavbarCustom v-if="authStore.isUserAuthenticated" />
			</header>
		</template>

		<!-- MAIN CONTENT -->
		<template #content>
			<main class="content flex">
				<aside
					v-if="authStore.isUserAuthenticated"
					class="hidden lg:flex flex-col min-w-[120px] md:min-w-[260px] lg:flex-1 border-e-1 border-e-neutral-100"
				>
					<div class="flex gap-3 items-center p-4 border-b-1 border-b-neutral-100">
						<Dropdown :title="'Mi cuenta'">
							<template #cta>
								<Avatar class="w-8" />
								<span class="font-semibold">Administrador</span>
							</template>
						</Dropdown>
					</div>
					<RouterLink to="/clients" class="btn btn-ghost btn-sm">Clientes</RouterLink>
				</aside>
				<div class="w-full h-full inline-flex flex-col lg:flex-5">
					<div v-if="authStore.isUserAuthenticated" class="flex flex-col p-4">
						<h2 class="text-2xl font-bold">{{ breadcrumbsStore?.items[0]?.text }}</h2>
						<Breadcumbs  />
					</div>
					<RouterView />
				</div>
			</main>
		</template>

		<!-- FOOTER -->
		<template #footer>
			<footer class="footer">
				<div class="container"></div>
			</footer>
		</template>
	</AppMainLayout>
</template>
