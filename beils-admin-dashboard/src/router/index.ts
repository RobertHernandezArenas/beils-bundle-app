import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from './guards/authGuard.ts'
import { useBreadcrumbsStore } from '@stores/breadcrumbs.store'

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			meta: {
				title: 'Autenticación',
				breadcumb: 'Autenticación'
			},
			component: () => import('@pages/SignIn.vue')
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			meta: {
				title: 'Dashboard',
				requiresAuth: true,
				breadcumb: 'Panel de Control'
			},
			component: () => import('@pages/Dashboard.vue')
		},
		{
			path: '/clients',
			name: 'clients',
			meta: {
				title: 'Clientes',
				requiresAuth: true,
				breadcumb: 'Clientes'
			},
			component: () => import('@pages/Clients.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@pages/NotFound.vue'),
			meta: {
				title: 'Página No Encontrada',
				breadcumb: 'Página No Encontrada'
			}
		}
	]
})

// Aplicar guard globalmente
router.beforeEach(authGuard)

router.afterEach(to => {
	const title = (to.meta.title as string) || 'BEiLS'
	document.title = `${title} - BEiLS Admin Dashboard`

	const breadcrumbsStore = useBreadcrumbsStore()
	breadcrumbsStore.updateBreadcrumbs(to)
})
