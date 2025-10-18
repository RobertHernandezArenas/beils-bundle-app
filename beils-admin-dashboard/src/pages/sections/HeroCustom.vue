<script setup lang="ts">
	import { reactive, watchEffect } from 'vue'

	interface AuthForm {
		email: string
		password: string
		rememberMe: boolean
	}

	const form = reactive<AuthForm>({
		email: '',
		password: '',
		rememberMe: false
	})

	watchEffect(() => {})
</script>

<template>
	<form class="max-w-md bg-white px-4 py-8 sm:rounded-lg sm:px-10 lg:shadow">
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
					class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
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
					class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
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
					class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
				/>
				<label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember Me</label>
			</div>
		</div>

		<!-- Sign In Button -->
		<div class="mt-6">
			<button
				type="submit"
				class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
			>
				Sign in
			</button>
		</div>

		<!-- Sign Up Link -->
		<div class="mt-6 text-center">
			<p class="text-sm text-gray-600">
				Don't have an account?
				<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up now</a>
			</p>
		</div>
	</form>
</template>
