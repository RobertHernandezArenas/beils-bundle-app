<script setup lang="ts">
	import LoaderCustom from '@/components/commons/LoaderCustom.vue'
	import { useAuthStore } from '@/stores/useAuth.store'

	const authStore = useAuthStore()
</script>

<template>
	<div
		v-if="authStore.isLoading"
		class="flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden text-4xl"
	>
		<LoaderCustom />
	</div>

	<div v-else class="flex">
		<button class="btn btn-active btn-error" @click="authStore.signOut">Sign Out</button>
	</div>
</template>
