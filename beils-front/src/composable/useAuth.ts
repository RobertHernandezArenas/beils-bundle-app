import { useMutation } from '@tanstack/vue-query'
import { Supabase } from '@/services/supabase'
import { useAuthStore } from '@/stores/authStore'
import type { AuthCredentials } from '@/types/auth'

export const useAuth = () => {
	const store = useAuthStore()

	const authMutation = useMutation({
		mutationFn: async (credentials: AuthCredentials) => {
			const { email, password, isLogin } = credentials
			const { data, error } = isLogin
				? await Supabase.auth.signInWithPassword({ email, password })
				: await Supabase.auth.signUp({ email, password })

			if (error) throw new Error(error.message)
			return data
		},
		onSuccess: data => {
			store.setUser(data.user)
		},
		onError: (error: Error) => {
			store.clearUser()
			console.error('Auth error:', error.message)
		}
	})

	return { authMutation }
}
