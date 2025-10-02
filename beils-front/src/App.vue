<template>
	<AppMainLayout>
		<template #header>
			<!-- HEADER -->
			<header class="header relative h-fit">
				<!-- <NavbarCustom /> -->
				<div class="container"></div>
			</header>
		</template>

		<!-- MAIN CONTENT -->
		<template #content>
			<main class="content flex flex-col items-center">
				<div class="container h-full inline-flex justify-center items-start">
					<RouterView />
				</div>
			</main>
		</template>

		<!-- FOOTER -->
		<template #footer>
			<footer class="footer">
				<NavBarMobile />
				<div class="container p-12"></div>
			</footer>
		</template>
	</AppMainLayout>
</template>

<script setup lang="ts">
	import { watchEffect } from 'vue'
	import { RouterView } from 'vue-router'

	import NavbarCustom from '@/components/commons/NavbarCustom.vue'
	import NavBarMobile from '@/components/commons/NavBarMobile.vue'
	import AppMainLayout from '@layouts/AppMainLayout.vue'

	watchEffect(() => {})
</script>
