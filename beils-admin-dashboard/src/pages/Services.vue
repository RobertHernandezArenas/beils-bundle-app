<script setup lang="ts">
	import { useServiceStore } from '@/stores/useServices.store'
	const serviceStore = useServiceStore()
</script>

<template>
	<div class="join">
		<div>
			<div>
				<input class="input join-item" placeholder="Search" />
			</div>
		</div>
		<select class="select join-item">
			<option disabled selected>Filter</option>
			<option
				v-for="category in serviceStore.services?.filter(category => category.type)"
				:key="category.id"
			>
				{{ category.type }}
			</option>
		</select>
		<div class="indicator">
			<button class="btn join-item">Search</button>
		</div>
	</div>
	{{ serviceStore.services }}
</template>
