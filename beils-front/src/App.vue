<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import AppMainLayout from '@layouts/AppMainLayout.vue'
</script>

<template>
	<AppMainLayout class="bg-beils-50 overflow-x-hidden">
		<template #header>
			<!-- HEADER -->
			<header class="header relative h-fit">
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
				<div class="container"></div>
			</footer>
		</template>
	</AppMainLayout>
</template>
