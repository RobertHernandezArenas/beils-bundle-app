<script setup lang="ts">
	import { RouterView } from 'vue-router'
	import { useAuthStore } from '@stores/auth.store'
	import { useBreadcrumbsStore } from '@stores/breadcrumbs.store'

	import AppMainLayout from '@layouts/AppMainLayout.vue'
	import Avatar from '@components/commons/Avatar.vue'
	import Breadcumbs from '@components/commons/Breadcumbs.vue'
	import Dropdown from '@components/commons/Dropdown.vue'
	import LoaderCustom from '@components/commons/LoaderCustom.vue'
	import NavbarCustom from '@components/Navbar/NavbarCustom.vue'

	const breadcrumbsStore = useBreadcrumbsStore()
	const authStore = useAuthStore()
</script>

<template>
	<LoaderCustom v-if="authStore.isLoading" />

	<AppMainLayout v-else class="overflow-x-hidden bg-white">
		<template #header>
			<!-- HEADER -->
			<header class="header relative h-fit">
				<NavbarCustom v-if="authStore.isAuthenticated" />
			</header>
		</template>

		<!-- MAIN CONTENT -->
		<template #content>
			<main class="content flex">
				<aside
					v-if="authStore.isAuthenticated"
					class="hidden min-w-[120px] flex-col border-e-1 border-e-neutral-100 md:min-w-[260px] lg:flex lg:flex-1"
				>
					<div class="flex items-center gap-3 border-b-1 border-b-neutral-100 p-4">
						<Dropdown :title="'Mi cuenta'">
							<template #cta>
								<Avatar class="w-8" />
								<span class="font-semibold">Administrador</span>
							</template>
						</Dropdown>
					</div>
					<RouterLink to="/clients" class="btn btn-ghost btn-sm">Clientes</RouterLink>
				</aside>
				<div class="inline-flex h-full w-full flex-col lg:flex-5">
					<div v-if="authStore.isAuthenticated" class="flex flex-col p-4">
						<h2 class="text-2xl font-bold">{{ breadcrumbsStore?.items[0]?.text }}</h2>
						<Breadcumbs />
					</div>
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
