<script setup lang="ts">
import { useServiceStore } from '@/stores/useServices.store';

const serviceStore = useServiceStore()
</script>

<template>
	<h1 class="text-4xl font-semibold text-beils-700">Servicios</h1>
  {{ serviceStore.services }}
</template>

