import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/types/auth'

export const useAuthStore = defineStore('auth', () => {
	const user = ref<User | null>(null)
	const isLoading = ref(false)

	const setUser = (userData: User | null) => {
		user.value = userData
	}

	const clearUser = () => {
		user.value = null
	}

	return { user, isLoading, setUser, clearUser }
})
