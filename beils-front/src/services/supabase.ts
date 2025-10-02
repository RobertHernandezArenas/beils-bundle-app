import { createClient } from '@supabase/supabase-js'
import { onMounted, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export const Supabase = createClient(
	import.meta.env.VITE_APP_SUPABASE_URL,
	import.meta.env.VITE_APP_SUPABASE_KEY
)

export function useClient() {
	const router = useRouter()
	const route = useRoute()

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
		try {
			return await Supabase.auth.signInWithPassword({ email, password })
		} catch (error) {
			console.error('💩', error)
		}
	}

	async function onAuthStateChange() {
		Supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
			return !session ? router.push('/login') : router.push('/')
		})
	}

	watchEffect(() => {
		onAuthStateChange()
	})

	return { signUp, logInOTP, login, onAuthStateChange }
}
