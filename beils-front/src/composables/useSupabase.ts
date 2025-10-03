import { createClient, type User } from '@supabase/supabase-js'

import { watchEffect, ref, readonly, computed } from 'vue'
import { useRouter } from 'vue-router'

export const Supabase = createClient(
	import.meta.env.VITE_APP_SUPABASE_URL,
	import.meta.env.VITE_APP_SUPABASE_KEY
)

export function useClient() {
	const router = useRouter()

	const user = ref<User | null>(null)
	const isLoading = ref(false)
	const error = ref<string | null>(null)

	const isAuthenticated = computed(() => !!user.value)

	async function signUp(email: string, password: string) {
		try {
			await Supabase.auth.signUp({ email, password })
		} catch (error) {
			console.error('💩', error)
		}
	}

	async function logInOTP(email: string) {
		try {
			return await Supabase.auth.signInWithOtp({ email })
		} catch (error) {
			console.error('💩', error)
		}
	}

	async function login(email: string, password: string) {
		isLoading.value = true
		error.value = null
		try {
			const { data, error: authError } = await Supabase.auth.signInWithPassword({
				email,
				password
			})

			if (authError) throw authError

			user.value = data.user
			console.log('👽', user.value)
			return { success: true }
		} catch (err) {
			error.value = err instanceof Error ? err.message : 'Login failed'
			return { success: false, error: error.value }
		} finally {
			isLoading.value = false
		}
	}

	async function logout() {
		isLoading.value = true
		error.value = null
		try {
			const { error: authError } = await Supabase.auth.signOut()

			if (authError) throw authError

			return { success: true }
		} catch (err) {
			error.value = err instanceof Error ? err.message : 'Login failed'
			return { success: false, error: error.value }
		} finally {
			isLoading.value = false
		}
	}

	async function onAuthStateChange() {
		Supabase.auth.onAuthStateChange(async (event, session) => {
			if (!session) {
				await router.replace({
					name: 'login'
				})
			} else {
				await router.replace({
					name: 'dashboard'
				})
			}
		})
	}

	watchEffect(() => {
		onAuthStateChange()

		console.log('🚕', user.value)
	})

	return {
		signUp,
		logInOTP,
		login,
		logout,
		onAuthStateChange,
		isLoading: readonly(isLoading),
		error: readonly(error),
		isAuthenticated
	}
}
