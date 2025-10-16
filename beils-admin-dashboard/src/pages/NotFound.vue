<script setup lang="ts">
	import { useRouter } from 'vue-router'

	const router = useRouter()

	const goHome = () => {
		router.push({ name: 'auth' })
	}
</script>

<template>
	<div class="flex h-full items-center justify-center">
		<div class="w-full max-w-md text-center">
			<div class="mb-8">
				<h1 class="text-beils-700 text-9xl font-bold">404</h1>
				<h2 class="text-beils-300 mt-4 text-2xl font-semibold">Página no encontrada</h2>
			</div>

			<button class="btn bg-beils-500 btn-lg" @click="goHome">Volver al Inicio</button>
		</div>
	</div>
</template>
