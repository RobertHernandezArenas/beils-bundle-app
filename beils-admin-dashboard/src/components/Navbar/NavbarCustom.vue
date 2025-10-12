<script setup lang="ts">
	import { TextAlignJustify } from 'lucide-vue-next'
	import Avatar from '@components/commons/Avatar.vue'
</script>

<template>
	<!-- drawer -->
	<div class="drawer bg-white">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<div
				class="navbar flex items-center justify-between gap-3 w-full border-b-1 border-neutral-100 px-4 min-h-[2.5rem]"
			>
				<h1 class="flex-1 font-semibold text-beils-70 inline-flex gap-2 items-center cursor-default select-none">BEiLS <span class="font-light text-xs"> BELLEZA HONESTA</span></h1>
				<!-- <Avatar class="w-6" /> -->
				<div class="flex-none lg:hidden">
					<label for="my-drawer-3" aria-label="open sidebar">
						<TextAlignJustify :size="16" :color="'gray'" />
					</label>
				</div>

				<!-- -->
				<!-- Navbar menu content here -->
				<!-- <div class="hidden flex-none lg:block">
					<ul class="menu menu-horizontal">
						<li><a>Navbar Item 1</a></li>
						<li><a>Navbar Item 2</a></li>
					</ul>
				</div> -->
			</div>
		</div>
		<div class="drawer-side">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
			<ul class="menu bg-base-200 min-h-full w-80 p-4">
				<!-- Sidebar content here -->
				<li><a>Sidebar Item 1</a></li>
				<li><a>Sidebar Item 2</a></li>
			</ul>
		</div>
	</div>
</template>
