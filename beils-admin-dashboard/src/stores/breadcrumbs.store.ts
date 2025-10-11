// src/stores/breadcrumbs.store.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router'

export interface BreadcrumbItem {
	text: string
	to?: string
	disabled?: boolean
}

// Type para el meta, permitiendo string o una función que devuelve un string
type BreadcrumbMeta = string | ((route: RouteLocationNormalized) => string)

export const useBreadcrumbsStore = defineStore('breadcrumbs', () => {
	const items = ref<BreadcrumbItem[]>([])

	// Función para resolver el texto del breadcrumb, sea string o función
	const resolveBreadcrumbText = (
		metaValue: BreadcrumbMeta,
		route: RouteLocationNormalized
	): string => {
		if (typeof metaValue === 'function') {
			return metaValue(route) // Ejecutamos la función si es una
		}
		return metaValue // Devolvemos el string directamente
	}

	function updateBreadcrumbs(route: RouteLocationNormalized) {
		const breadcrumbs: BreadcrumbItem[] = []

		// Iteramos sobre las rutas coincidentes (clave para rutas anidadas)
		route.matched.forEach((record: RouteRecordNormalized) => {
			// Usamos 'breadcumb' como en tu estructura
			const metaBreadcumb = record.meta?.breadcumb as BreadcrumbMeta | undefined

			if (metaBreadcumb) {
				breadcrumbs.push({
					// Resolvemos el texto usando la nueva función
					text: resolveBreadcrumbText(metaBreadcumb, route),
					to: record.path,
					disabled: false // Por defecto, todos habilitados
				})
			}
		})

		// Deshabilitamos el último elemento, ya que es la página actual
		if (breadcrumbs.length > 0) {
			breadcrumbs[breadcrumbs.length - 1].disabled = true
		}

		items.value = breadcrumbs
	}

	return { items, updateBreadcrumbs }
})
