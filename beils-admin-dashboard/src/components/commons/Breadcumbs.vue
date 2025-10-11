<script setup lang="ts">
	import { useBreadcrumbsStore } from '@/stores/breadcrumbs.store'
	import { House } from 'lucide-vue-next'

	// Consumimos la tienda
	const breadcrumbsStore = useBreadcrumbsStore()
</script>

<template>
	<nav v-if="breadcrumbsStore.items.length > 0" aria-label="breadcrumb">
		<div class="text-sm breadcrumbs">
			<ul>
				<li v-for="(item, index) in breadcrumbsStore.items" :key="index">
					<span
						v-if="item.disabled || index === breadcrumbsStore.items.length - 1"
						class="inline-flex items-center text-neutral-500"
						aria-current="page"
					>
						<House v-if="item.text.toLowerCase() === 'panel de control'" :size="18" />
						{{ item.text }}
					</span>

					<router-link
						v-else
						:to="item.to || '/'"
						class="hover:underline hover:text-primary transition-colors"
					>
						{{ item.text }}
					</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>
