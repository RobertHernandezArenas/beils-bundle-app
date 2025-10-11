import { useAuthStore } from '@/stores/auth.store'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const authGuard = async (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) => {
	const authStore = useAuthStore()
	if (to.meta.requiresAuth && !authStore.session) {
		next({ name: 'login' })
	} else {
		next()
	}
}
