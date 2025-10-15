import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Session, User } from '@supabase/supabase-js'
import { Supabase } from '@/services/Supabase'
import { router } from '@/router'

export const useAuthStore = defineStore('auth', () => {
	const session = ref<Session | null>(null)
	const user = computed<User | null>(() => session.value?.user ?? null)
	const isLoading = ref(false)
	const errorMessage = ref<string | null>(null)

	const isAuthenticated = computed(() => session.value?.user)

	const signIn = async (email: string, password: string) => {
		isLoading.value = true
		errorMessage.value = null

		try {
			const { data, error } = await Supabase.auth.signInWithPassword({ email, password })

			isLoading.value = false

			if (error) throw error
			session.value = data.session

			router.replace({ name: 'dashboard' })
		} catch (error) {
			if (error instanceof Error) {
				errorMessage.value = error.message || 'Error al iniciar sesión'
			}
		} finally {
			isLoading.value = false
		}
	}

	const signOut = async () => {
		await Supabase.auth.signOut()
		session.value = null
		router.replace({ name: 'auth' })
	}

	const initAuth = async () => {
		isLoading.value = true
		try {
			// 👇 Esto fuerza la renovación del token si está expirado (pero refresh_token es válido)
			const {
				data: { user },
				error
			} = await Supabase.auth.getUser()

			if (error || !user) {
				session.value = null
				if (router.currentRoute.value.meta.requiresAuth) {
					router.push({ name: 'auth' })
				}
			} else {
				// Si getUser() funciona, la sesión es válida
				const { data } = await Supabase.auth.getSession()
				session.value = data.session
				// TODO: arreglar la redirección y keeping session
				/* if (router.currentRoute.value.name === 'auth') {
					router.push({ name: 'dashboard' })
				} */
				Supabase.auth.onAuthStateChange((_event, newSession) => {
					session.value = newSession
					// ... lógica de redirección
				})
			}
		} finally {
			isLoading.value = false
		}

		// Listener para cambios futuros
		Supabase.auth.onAuthStateChange((_event, newSession) => {
			session.value = newSession
			// ... lógica de redirección
		})
	}

	return { session, user, isLoading, errorMessage, signIn, signOut, initAuth, isAuthenticated }
})
