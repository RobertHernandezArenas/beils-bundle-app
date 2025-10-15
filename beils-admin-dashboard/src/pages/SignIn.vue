<script setup lang="ts">
	import { reactive } from 'vue'
	import LoaderCustom from '@/components/commons/LoaderCustom.vue'
	import { useAuthStore } from '@/stores/auth.store'
	import { Supabase } from '@/services/Supabase'

	const authStore = useAuthStore()

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
</script>

<template>
	<LoaderCustom v-if="authStore.isLoading" />

	<div v-else class="flex h-full w-full flex-col items-center justify-center">
		<form
			class="w-xs rounded-lg px-4 py-8 md:w-[412px]"
			@submit.prevent="authStore.signIn(form.email, form.password)"
		>
			<div class="mb-10 flex flex-col items-center lg:mb-12">
				<h1
					class="text-[28px] leading-10 font-extrabold tracking-[.25rem] text-black lg:text-[38px] lg:leading-12"
				>
					BEiLS
				</h1>
				<p class="text-sm tracking-[2px] text-black">BELLEZA HONESTA</p>
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
						class="focus:ring-beils-500 focus:border-beils-500 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-black placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm"
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
						class="focus:ring-beils-500 focus:border-beils-500 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-black placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm"
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
						class="text-beils-600 focus:ring-beils-500 checked:bg-beils-600 accent-beils-700 h-4 w-4 rounded"
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
					class="bg-beils-600 hover:bg-beils-700 focus:ring-beils-500 flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
				>
					Iniciar sesión
				</button>
			</div>

			<!-- Recover Password Link -->
			<div class="mt-6 text-center">
				<p class="text-sm text-gray-600">
					Recuperar
					<a href="#" class="text-beils-600 hover:text-beils-800 font-medium">contraseña</a>
				</p>
			</div>
		</form>
		{{ console.log('💩', Supabase.auth.getSession()) }}
		{{ console.log('👽', Supabase.auth.getUser()) }}
	</div>
</template>
