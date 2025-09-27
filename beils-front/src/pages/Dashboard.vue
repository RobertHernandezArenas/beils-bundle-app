<script setup lang="ts">
	import NavBar from '@/components/commons/NavBar.vue'
	import MainLayout from '@/components/layouts/MainLayout.vue'
</script>

<template>
	<MainLayout>
		<template #header>
			<NavBar />
		</template>
		<template #content>
			<div>Dashboard</div>
		</template>
		<template #footer>
			<div>Dashboard</div>
		</template>
	</MainLayout>
</template>
