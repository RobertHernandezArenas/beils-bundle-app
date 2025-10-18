import { defineStore } from 'pinia'
import { ref, computed, onMounted } from 'vue'
import { Supabase } from '@/services/Supabase'

export interface Service {
	id: string // UUID se representa como string en JS/TS
	name: string | null
	description: string | null
	type: string
	subtype: string
	session_price: number | null
	bono_session: number | null
	image: string | null
	is_active: boolean
	created_at: string | null // ISO 8601 string (ej: "2025-04-05T10:30:00+00:00")
	updated_at: string | null
}

export const useServiceStore = defineStore('service', () => {
	const services = ref<Service[] | null>(null)
	const isLoading = ref(false)
	const errorServiceMessage = ref<string | null>(null)

	const getServices = async () => {
		try {
			const { data, error } = await Supabase.from('services').select('*')
			services.value = data
			if (error) throw error
		} catch (error) {
			if (error instanceof Error) {
				errorServiceMessage.value = error.message || 'Error al obtener los servicios'
			}
		} finally {
			isLoading.value = false
		}
	}

	onMounted(async () => {
		await getServices()
	})

	return { services, isLoading, errorServiceMessage }
})
