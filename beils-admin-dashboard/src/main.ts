import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from '@stores/auth.store'

import App from './App.vue'
import { router } from './router'
import '@/main.css'

const app = createApp(App)

app.use(createPinia())
// 👇 Inicializa la autenticación ANTES de montar
const authStore = useAuthStore()
authStore.initAuth() // ← Esto recupera la sesión persistida
app.use(router)

app.mount('#app')
