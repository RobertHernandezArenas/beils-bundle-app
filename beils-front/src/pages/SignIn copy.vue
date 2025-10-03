<script setup lang="ts">
	import LogoBeilsIcon from '@/components/icons/LogoBeilsIcon.vue'
	import { Supabase, useClient } from '@composables/useSupabase'
	import { reactive, watchEffect } from 'vue'

	const { signUp, logInOTP, login, onAuthStateChange, isLoading, error, isAuthenticated } =
		useClient()

	interface LoginForm {
		email: string
		password: string
		rememberMe: boolean
	}

	const form = reactive<LoginForm>({
		email: '',
		password: '',
		rememberMe: false
	})

	watchEffect(() => {
		console.log('☠️', Supabase.auth.getUser())
	})

	const signIn = async () => {
		try {
			// signUp(form.email, form.password)
			await login(form.email, form.password)
		} catch (error) {
			console.error(error)
		}
	}
</script>

<template>
	<div v-if="isLoading" class="flex flex-col justify-center items-center text-4xl">caca</div>
	<div v-else class="flex flex-col justify-center w-full h-full lg:items-center">
		<form class="w-full px-4 py-8 rounded-lg lg:max-w-sm" @submit.prevent="signIn">
			<div class="flex flex-col items-center mb-10 lg:mb-12">
				<h1 class="text-[28px] lg:text-[38px] font-extrabold text-black leading-10 lg:leading-12 tracking-[.25rem]">BEiLS</h1>
				<p class="text-sm tracking-[2px] text-black">BELLEZA HONESTA</p>
				<!-- <LogoBeilsIcon /> -->
			</div>
			<!-- Email Input -->
			<div class="mt-6">
				<label for="email" class="block text-sm font-medium text-gray-700">
					Correo electrónico
				</label>
				<div class="mt-1">
					<input
						id="email"
						v-model="form.email"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-black focus:outline-none focus:ring-beils-500 focus:border-beils-500 sm:text-sm"
					/>
				</div>
			</div>

			<!-- Password Input -->
			<div class="mt-6">
				<label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
				<div class="mt-1">
					<input
						id="password"
						v-model="form.password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-black focus:outline-none focus:ring-beils-500 focus:border-beils-500 sm:text-sm"
					/>
				</div>
			</div>

			<!-- Remember Me Checkbox -->
			<div class="mt-6 flex items-center justify-between">
				<div class="flex items-center">
					<input
						id="remember-me"
						v-model="form.rememberMe"
						name="remember-me"
						type="checkbox"
						class="h-4 w-4 text-beils-600 focus:ring-beils-500 rounded checked:bg-beils-600 accent-beils-700"
					/>
					<label for="remember-me" class="ml-2 block text-sm text-gray-900">
						Recordar sesión
					</label>
				</div>
			</div>

			<!-- Sign In Button -->
			<div class="mt-6">
				<button
					type="submit"
					class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-beils-600 hover:bg-beils-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-beils-500"
				>
					Iniciar sesión
				</button>
			</div>

			<!-- Recover Password Link -->
			<div class="mt-6 text-center">
				<p class="text-sm text-gray-600">
					No recuerdo mi contraseña:
					<a
						href="#"
						class="font-medium text-beils-600 hover:text-beils-800"
						@click="Supabase.auth.signOut()"
					>
						Recuperarla ahora
					</a>
				</p>
			</div>
		</form>
	</div>
</template>
