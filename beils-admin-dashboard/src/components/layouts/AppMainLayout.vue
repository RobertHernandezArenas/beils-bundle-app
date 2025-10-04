<script setup lang="ts"></script>

<template>
	<div class="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-[100dvh]">
		<slot name="header" />

		<slot name="content" />

		<slot name="footer" />
	</div>
</template>
