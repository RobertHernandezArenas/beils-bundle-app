import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
      name: 'login',
			component: () => import('@pages/SignIn.vue')
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import('@pages/Dashboard.vue'),
			children: []
		}
	]
})
