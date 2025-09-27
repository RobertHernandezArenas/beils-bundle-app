<template>
	<div class="grid min-h-[100dvh]">
		<!-- header -->
		<header class="header h-fit">
			<slot name="header" />
		</header>

		<!-- main -->
		<main class="content">
			<slot name="content" />
		</main>

		<!-- footer -->
		<footer class="footer">
			<slot name="footer" />
		</footer>
	</div>
</template>

<style>
	main-layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100dvh;
	}
</style>
