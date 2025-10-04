import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Session, User } from '@supabase/supabase-js'
import { Supabase } from '@/services/Supabase'

export const useAuthStore = defineStore('auth', () => {
	const session = ref<Session | null>(null)
	const user = computed<User | null>(() => session.value?.user ?? null)
	const isLoading = ref(false)

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
	}

	const initAuth = async () => {
		const { data } = await Supabase.auth.getSession()
		session.value = data.session
		Supabase.auth.onAuthStateChange((_event, newSession) => {
			session.value = newSession
		})
	}

	return { session, user, isLoading, signIn, signOut, initAuth }
})
