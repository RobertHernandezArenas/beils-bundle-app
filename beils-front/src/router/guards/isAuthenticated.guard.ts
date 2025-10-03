import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export const isAuthenticated = (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) => {
	return next()
}
