import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

// TODO: Implementar el guard
export const authGuard = async (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) => {
	next()
}
