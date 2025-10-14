import { createIcons, icons } from 'lucide'
import { onMounted } from 'vue'

export const useNavbarData = () => {
	const items = [
		{
			name: 'Vista general',
			icon: 'layout-dashboard',
			to: '/'
		},
		{
			name: 'Clientes',
			icon: 'users-round',
			to: '/clients'
		},
		{
			name: 'Citas',
			icon: 'book-user',
			to: '/appointments'
		},
		{
			name: 'Servicios',
			icon: 'puzzle',
			to: '/services'
		},
		{
			name: 'Productos',
			icon: 'package-open',
			to: '/products'
		},
		{
			name: 'Ventas',
			icon: 'chart-column-increasing',
			to: '/sales'
		},
		{
			name: 'Facturas',
			icon: 'receipt-text',
			to: '/invoices'
		},
		{
			name: 'Ofertas',
			icon: 'percent',
			to: '/invoices'
		},
		{
			name: 'Campañas',
			icon: 'refresh-ccw-dot',
			to: '/campaigns'
		},
		{
			name: 'Configuraciones',
			icon: 'sliders-vertical',
			to: '/settings'
		}
	]
	onMounted(() => {
		createIcons({ icons })
	})
	return { items }
}
