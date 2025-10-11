<script setup lang="ts">
	const props = withDefaults(defineProps<{ image?: string }>(), {
		image: 'https://media.wired.com/photos/5d960eba01e4a4000826137c/1:1/w_960,h_960,c_limit/Culture_Monitor_WillSmith-465783654.jpg'
	})
</script>

<template>
	<div class="avatar">
		<div class="rounded-full">
			<img :src="props.image" />
		</div>
	</div>
</template>

<style scoped></style>
