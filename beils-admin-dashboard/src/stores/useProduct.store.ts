import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Session, User } from '@supabase/supabase-js'
import { Supabase } from '@/services/Supabase'
import { router } from '@/router'

export const useProductStore = defineStore('product', () => {
	const isLoading = ref(false)
	const errorProductMessage = ref<string | null>(null)

	const products = async () => {
		try {
			const { data, error } = await Supabase.from('products').select('*')
			if (error) throw error
			return data
		} catch (error) {
			if (error instanceof Error) {
				errorProductMessage.value = error.message || 'Error al obtener los productos'
			}
		} finally {
			isLoading.value = false
		}
	}

	return { products }
})
