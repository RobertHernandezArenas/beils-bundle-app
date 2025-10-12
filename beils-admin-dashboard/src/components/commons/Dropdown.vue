<script setup lang="ts">
	import { useAuthStore } from '@/stores/auth.store'
	import { LogOut } from 'lucide-vue-next'
	import { Settings } from 'lucide-vue-next'
	import { UserRound } from 'lucide-vue-next'

	const authStore = useAuthStore()

	interface DropdownOptions {
		name: string
		url: string
	}
	const props = withDefaults(defineProps<{ title?: string; options?: DropdownOptions[] }>(), {
		title: 'Mi cuenta',
		options: () => [
			{ name: 'Perfil', url: '' },
			{ name: 'Ajustes', url: '' },
			{ name: 'Cerrar sesión', url: '' }
		]
	})
</script>

<template>
	<details class="dropdown flex flex-col justify-center items-start gap-2">
		<summary class="flex items-center justify-center gap-2 cursor-pointer">
			<slot name="cta" />
		</summary>

		<ul
			class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm border-1 border-neutral-100"
		>
			<h2>{{ props.title }}</h2>
			<li>
				<span>
					<UserRound :size="16" />
					Perfil
				</span>
			</li>
			<li>
				<span>
					<Settings :size="18" />
					Ajustes
				</span>
			</li>
			<li>
				<span @click="authStore.signOut">
					<LogOut :size="16" />
					Cerrar sesión
				</span>
			</li>
		</ul>
	</details>
</template>
