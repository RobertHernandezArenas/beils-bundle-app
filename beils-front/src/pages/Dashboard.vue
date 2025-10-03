<script setup lang="ts">
	import LoaderCustom from '@/components/commons/LoaderCustom.vue'
	import { Supabase, useClient } from '@composables/useSupabase'
	const { signUp, logInOTP, login, logout, onAuthStateChange, isLoading, error, isAuthenticated } =
		useClient()
</script>

<template>
	<div
		v-if="isLoading"
		class="flex flex-col justify-center items-center text-4xl min-h-[100dvh] overflow-hidden"
	>
		<LoaderCustom />
	</div>

	<div v-else class="flex">
		<button class="btn btn-active btn-error" @click="logout">Sign Out</button>
	</div>
</template>
