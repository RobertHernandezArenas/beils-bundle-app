import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

import pluginPrettier from 'eslint-plugin-prettier' // Importa el plugin de Prettier
import pluginVitest from '@vitest/eslint-plugin'
import pluginPlaywright from 'eslint-plugin-playwright'
// Configura el soporte para múltiples lenguajes en archivos `.vue`
import { configureVueProject } from '@vue/eslint-config-typescript'
configureVueProject({ scriptLangs: ['ts', 'tsx', 'js', 'jsx'] })

export default defineConfigWithVueTs(
	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}'] // Especifica los archivos que se deben analizar
	},

	// Ignora carpetas específicas
	globalIgnores([
		'**/dist/**',
		'**/dist-ssr/**',
		'**/coverage/**',
		'**/node_modules/**',
		'**/.nuxt/**',
		'**/.output/**',
		'**/.vercel/**',
		'**/.vercel/output/**',
		'**/.vscode/**'
	]),

	// Reglas esenciales de Vue 3
	pluginVue.configs['flat/recommended'],

	// Reglas recomendadas para TypeScript en proyectos Vue
	vueTsConfigs.recommended,

	globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

	pluginVue.configs['flat/essential'],
	vueTsConfigs.recommended,

	{
		...pluginVitest.configs.recommended,
		files: ['src/**/__tests__/*']
	},

	{
		...pluginPlaywright.configs['flat/recommended'],
		files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}']
	},

	// Desactiva reglas conflictivas entre ESLint y Prettier
	skipFormatting,

	// Configuraciones personalizadas adicionales

	{
		// Extiende la configuración de Prettier
		plugins: {
			prettier: pluginPrettier
		},

		rules: {
			// Variables no utilizadas
			'@typescript-eslint/no-unused-vars': 'warn',
			// Permite nombres de componentes de una sola palabra (por ejemplo, "Home")
			'vue/multi-word-component-names': 'off',
			// Permite el uso de "any" en TypeScript
			'@typescript-eslint/no-explicit-any': 'off',
			// Permite el uso de "console" en el código
			'no-console': 'off',
			// Permite el uso de "debugger" en el código
			'no-debugger': 'off', // Permite el uso de "debugger" en el código
			'vue/no-v-html': 'off', // Permite el uso de v-html en Vue
			'vue/require-default-prop': 'off', // Permite propiedades sin valor por defecto
			'vue/valid-v-slot': 'off', // Permite el uso de v-slot sin nombre
			'vue/no-multiple-template-root': 'off', // Permite múltiples raíces en plantillas Vue
			'vue/require-prop-types': 'off', // Permite propiedades sin tipo definido
			'vue/no-setup-props-destructure': 'off', // Permite la desestructuración de props en setup
			'vue/no-setup-refs-destructure': 'off' // Permite la desestructuración de refs en setup
		}
	}
)
