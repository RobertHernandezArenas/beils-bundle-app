import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), vueDevTools(), tailwindcss()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
			'@icons': fileURLToPath(new URL('./src/components/icons', import.meta.url)),
			'@guards': fileURLToPath(new URL('./src/router/guards', import.meta.url)),
			'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
			'@layouts': fileURLToPath(new URL('./src/components/layouts', import.meta.url)),
			'@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
			'@sections': fileURLToPath(new URL('./src/pages/sections', import.meta.url)),
		}
	},
	server: {
		allowedHosts: ['disclamatory-boraginaceous-cedric.ngrok-free.dev']
	}
})
