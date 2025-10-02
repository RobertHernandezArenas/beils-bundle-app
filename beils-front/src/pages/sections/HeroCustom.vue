<script setup lang="ts">
	import { supabaseClient, useClient } from '@/services/supabase'
	import { reactive, watchEffect } from 'vue'

	const { logInOTP, signUp } = useClient()

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
		console.log('☠️', supabaseClient.auth.getUser())
	})

	const signIn = async () => {
		try {
			// signUp(form.email, form.password)
			await logInOTP(form.email)
		} catch (error) {
			console.error(error)
		}
	}
</script>

<template>
	<form class="bg-white py-8 px-4 lg:shadow sm:rounded-lg sm:px-10 max-w-md">
		<!-- Email Input -->
		<div class="mt-6">
			<label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
			<div class="mt-1">
				<input
					id="email"
					v-model="form.email"
					name="email"
					type="email"
					autocomplete="email"
					required
					class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
		</div>

		<!-- Password Input -->
		<div class="mt-6">
			<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
			<div class="mt-1">
				<input
					id="password"
					v-model="form.password"
					name="password"
					type="password"
					autocomplete="current-password"
					required
					class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
			<p class="mt-1 text-xs text-gray-500">Password (min.8 character)</p>
		</div>

		<!-- Remember Me Checkbox -->
		<div class="mt-6 flex items-center justify-between">
			<div class="flex items-center">
				<input
					id="remember-me"
					v-model="form.rememberMe"
					name="remember-me"
					type="checkbox"
					class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
				/>
				<label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember Me</label>
			</div>
		</div>

		<!-- Sign In Button -->
		<div class="mt-6">
			<button
				type="submit"
				class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				@click.prevent="signIn"
			>
				Sign in
			</button>
		</div>

		<!-- Sign Up Link -->
		<div class="mt-6 text-center">
			<p class="text-sm text-gray-600">
				Don't have an account?
				<a
					href="#"
					class="font-medium text-indigo-600 hover:text-indigo-500"
					@click="supabaseClient.auth.signOut()"
				>
					Sign up now
				</a>
			</p>
		</div>
	</form>
</template>
