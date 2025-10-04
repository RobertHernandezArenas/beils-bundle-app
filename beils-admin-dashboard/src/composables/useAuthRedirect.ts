import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

export function useAuthRedirect() {
	const router = useRouter()
	const authStore = useAuthStore()

	watch(
		() => authStore.session,
		session => {
			if (!session) {
				router.push({ name: 'login' })
			}
		},
		{ immediate: true }
	)
}
