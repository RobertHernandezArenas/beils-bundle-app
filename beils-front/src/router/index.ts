import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from './guards/auth.guard.ts'

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			meta: {
				title: 'Iniciar Sesión'
			},
			component: () => import('@pages/SignIn.vue')
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			meta: {
				title: 'Dashboard',
				requiresAuth: true
			},
			component: () => import('@pages/Dashboard.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@pages/NotFound.vue'),
			meta: {
				title: 'Página No Encontrada'
			}
		}
	]
})

// Aplicar guard globalmente
// router.beforeEach(authGuard)

// Opcional: Cambiar título de página
router.afterEach(to => {
	const title = (to.meta.title as string) || 'BEiLS'
	document.title = `${title} - BEiLS Admin Dashboard`
})
