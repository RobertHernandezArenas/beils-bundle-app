<script setup lang="ts">
	import LoaderCustom from '@/components/commons/LoaderCustom.vue'
	import LoginForm from '@/components/LoginForm.vue'
	import { useAuthStore } from '@/stores/useAuth.store'

	const authStore = useAuthStore()

	const handleSignin = (data: any) => {
		authStore.signIn(data.email, data.password)
	}
</script>

<template>
	<section class="flex justify-center items-center h-[100dvh] p-6">
		<LoaderCustom v-if="authStore.isLoading" />
		<LoginForm v-else @signin="handleSignin" />
	</section>
</template>
