<template>
	<div class="flex">
		<button class="btn btn-active btn-error" @click="Supabase.auth.signOut()">Sign Out</button>
	</div>
</template>

<script setup lang="ts">
	import { Supabase } from '@composables/useSupabase'
</script>
