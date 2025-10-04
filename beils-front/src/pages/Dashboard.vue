<script setup lang="ts">
	import LoaderCustom from '@/components/commons/LoaderCustom.vue'
	import { useAuthStore } from '@/stores/authStore'
	import { useAuthRedirect } from '@/composables/useAuthRedirect'

	useAuthRedirect() // Redirige si no autenticado

	const authStore = useAuthStore()
</script>

<template>
	<div
		v-if="authStore.isLoading"
		class="flex flex-col justify-center items-center text-4xl min-h-[100dvh] overflow-hidden"
	>
		<LoaderCustom />
	</div>

	<div v-else class="flex">
		<button class="btn btn-active btn-error" @click="authStore.signOut">Sign Out</button>
	</div>
</template>
