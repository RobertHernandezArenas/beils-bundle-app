<script setup lang="ts">
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const goHome = () => {
		router.push({ name: 'login' })
	}
</script>

<template>
	<div class="min-h-screen flex items-center justify-center">
		<div class="max-w-md w-full text-center">
			<div class="mb-8">
				<h1 class="text-9xl font-bold text-beils-700">404</h1>
				<h2 class="text-2xl font-semibold text-beils-300 mt-4">Página no encontrada</h2>
			</div>

			<button class="btn bg-beils-500 btn-lg" @click="goHome">Volver al Inicio</button>
		</div>
	</div>
</template>
