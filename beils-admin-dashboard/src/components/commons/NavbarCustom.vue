<script setup lang="ts">
	const logo: { name: string; slogan: string } = {
		name: 'BEiLS',
		slogan: 'BELLEZA HONESTA'
	}
</script>

<template>
	<div class="hidden lg:block sticky top-0 left-0 w-full navbar shadow-sm py-4">
		<div class="container flex items-center justify-between">
			<RouterLink to="/" class="h-16 inline-flex flex-col items-start justify-center gap-1">
				<h1 class="text-2xl font-extrabold tracking-[.65rem] leading-[1.25rem] w-min">
					{{ logo.name }}
				</h1>
				<span class="text-[11.75px] font-light">
					{{ logo.slogan }}
				</span>
			</RouterLink>

			<div class="flex gap-16">
				<RouterLink :to="'#'">Qué hacemos</RouterLink>
				<RouterLink :to="'#'">Quienes somos</RouterLink>
				<RouterLink :to="'#'">Servicios</RouterLink>
				<RouterLink :to="'#'">Reserva una cita</RouterLink>
			</div>
		</div>
	</div>
</template>
