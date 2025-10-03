import { Supabase, useSupabase } from '@/composables/useSupabase'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const { user } = useSupabase()

export const authGuard = async (
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) => {
	console.log('🛡️ Guard ejecutado para ruta:', to.name)

	try {
		// Obtener sesión actual de forma síncrona
		const {
			data: { session }
		} = await Supabase.auth.getSession()
		const isAuthenticated = !!user.value && !!session?.user

		console.log('🔐 Estado autenticación:', isAuthenticated)
		console.log('📋 Meta de la ruta:', to.meta)

		const requiresAuth = to.meta.requiresAuth ?? false
		const redirectIfAuthenticated = to.meta.redirectIfAuthenticated ?? false

		// Si la ruta requiere autenticación y no está autenticado
		if (requiresAuth && !isAuthenticated) {
			console.log('🚫 Acceso denegado, redirigiendo a login')
			next({
				name: 'login'
				// query: { redirect: to.fullPath }
			})
			return
		}

		// Si la ruta redirige cuando está autenticado (como login)
		if (redirectIfAuthenticated && isAuthenticated) {
			console.log('🔄 Ya autenticado, redirigiendo a dashboard')
			next({ name: 'dashboard' })
		}

		console.log('✅ Acceso permitido a:', to.name)
		next()
	} catch (error) {
		console.error('❌ Error en guard:', error)
		next({ name: 'login' })
	}
}
