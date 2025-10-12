import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Session, User } from '@supabase/supabase-js'
import { Supabase } from '@/services/Supabase'
import { router } from '@/router'

export const useAuthStore = defineStore('auth', () => {
	const session = ref<Session | null>(null)
	const user = computed<User | null>(() => session.value?.user ?? null)
	const isLoading = ref(false)

	const isUserAuthenticated = computed(() => session.value?.user)

	const signIn = async (email: string, password: string) => {
		isLoading.value = true
		const { data, error } = await Supabase.auth.signInWithPassword({ email, password })
		isLoading.value = false
		if (error) throw error
		session.value = data.session
		return data.session
	}

	const signOut = async () => {
		await Supabase.auth.signOut()
		session.value = null
		// Limpiar credenciales guardadas al cerrar sesión
		localStorage.removeItem('rememberedCredentials')
		router.replace({ name: 'login' })
	}

	const initAuth = async () => {
		isLoading.value = true
		try {
			const { data } = await Supabase.auth.getSession()
			session.value = data.session

			// Redirigir al dashboard si hay sesión activa y está en login
			if (data.session && router.currentRoute.value.name === 'login') {
				router.push({ name: 'dashboard' })
			}
		} finally {
			isLoading.value = false
		}

		// Escuchar cambios de autenticación
		Supabase.auth.onAuthStateChange((_event, newSession) => {
			session.value = newSession

			// Redirigir según el estado de autenticación
			if (newSession && router.currentRoute.value.name === 'login') {
				router.push({ name: 'dashboard' })
			} else if (!newSession && router.currentRoute.value.meta.requiresAuth) {
				router.push({ name: 'login' })
			}
		})
	}

	return { session, user, isLoading, signIn, signOut, initAuth, isUserAuthenticated }
})
