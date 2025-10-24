<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from 'vue'
	import { Menu } from 'lucide-vue-next'
	import LoaderCustom from '@/components/commons/LoaderCustom.vue'
	import { useAuthStore } from '@/stores/useAuth.store'

	const authStore = useAuthStore()

	// Reactive state for sidebar collapse
	const isCollapsed = ref(false)

	// Detectamos si es móvil/tablet
	const isMobile = ref(false)

	const checkScreenSize = () => {
		isMobile.value = window.innerWidth < 1024 // lg breakpoint de Tailwind
	}

	const toggleSidebar = () => {
		if (!isMobile.value) {
			isCollapsed.value = !isCollapsed.value
		}
	}

	const closeMobileDrawer = () => {
		if (isMobile.value) {
			const drawer = document.getElementById('sidebar-drawer') as HTMLInputElement
			if (drawer) {
				drawer.checked = false
			}
		}
	}

	onMounted(() => {
		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', checkScreenSize)
	})
</script>

<template>
	<div class="drawer lg:drawer-open">
		<input id="sidebar-drawer" type="checkbox" class="drawer-toggle" />

		<div class="drawer-content flex flex-col">
			<!-- Header móvil -->
			<header
				class="border-base-300 bg-base-100 flex items-center justify-between border-b p-4 lg:hidden"
			>
				<label for="sidebar-drawer" class="drawer-button">
					<Menu />
				</label>
				<div class="w-6"></div>
				<div class="font-semibold"></div>
				<!-- Espacio para centrar -->
			</header>

			<!-- Contenido principal -->
			<main class="bg-base-100 flex-1 p-4 lg:p-8">
				<h1 class="mb-4 text-2xl font-bold">Dashboard</h1>
				<p class="text-base-content/70">Main content area</p>
			</main>
		</div>

		<!-- Sidebar/Drawer -->
		<div class="drawer-side">
			<label for="sidebar-drawer" class="drawer-overlay"></label>

			<div
				class="bg-base-200 border-base-300 flex h-full flex-col border-r transition-all duration-300 ease-in-out"
				:class="isCollapsed ? 'w-16' : 'w-64'"
			>
				<!-- Header -->
				<div class="border-base-300 flex items-center justify-between border-b p-4">
					<div v-if="!isCollapsed" class="flex items-center gap-2">
						<div class="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
							<span class="text-primary-content text-sm font-bold">A</span>
						</div>
						<span class="font-semibold">Acme Inc</span>
					</div>
					<!-- Botón de colapsar solo en desktop -->
					<button
						v-if="!isMobile"
						class="btn btn-ghost btn-sm hidden rounded-lg lg:flex"
						@click="toggleSidebar"
					>
						<svg
							v-if="!isCollapsed"
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="m15 18-6-6 6-6" />
						</svg>
						<svg
							v-else
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="m9 18 6-6-6-6" />
						</svg>
					</button>
					<!-- Botón cerrar en móvil -->
					<label v-else for="sidebar-drawer" class="btn btn-ghost btn-sm rounded-lg lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M18 6 6 18" />
							<path d="m6 6 12 12" />
						</svg>
					</label>
				</div>

				<!-- Navigation -->
				<div class="flex-1 overflow-auto py-4">
					<!-- Main Navigation -->
					<nav class="space-y-1 px-3">
						<div v-if="!isCollapsed" class="px-3 py-2">
							<div
								class="text-base-content/60 text-xs font-semibold tracking-wider uppercase"
							>
								Building Your Application
							</div>
						</div>

						<a
							href="#"
							class="nav-item text-base-content/70 hover:bg-base-300 hover:text-base-900 group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
							:class="{ 'justify-center': isCollapsed && !isMobile }"
							@click="closeMobileDrawer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
								<polyline points="9 22 9 12 15 12 15 22" />
							</svg>
							<span v-if="!isCollapsed || isMobile" class="nav-text text-sm font-medium">
								Data Fetching
							</span>
						</a>
					</nav>

					<!-- Platform Section -->
					<nav class="mt-6 space-y-1 px-3">
						<div v-if="!isCollapsed" class="px-3 py-2">
							<div
								class="text-base-content/60 text-xs font-semibold tracking-wider uppercase"
							>
								Platform
							</div>
						</div>

						<a
							href="#"
							class="nav-item text-base-content/70 hover:bg-base-300 hover:text-base-900 group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
							:class="{ 'justify-center': isCollapsed && !isMobile }"
							@click="closeMobileDrawer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<rect width="18" height="18" x="3" y="3" rx="2" />
								<path d="M3 9h18" />
								<path d="M9 21V9" />
							</svg>
							<span v-if="!isCollapsed || isMobile" class="nav-text text-sm font-medium">
								Playground
							</span>
						</a>

						<a
							href="#"
							class="nav-item text-base-content/70 hover:bg-base-300 hover:text-base-900 group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
							:class="{ 'justify-center': isCollapsed && !isMobile }"
							@click="closeMobileDrawer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
								/>
								<path d="M5 3v4" />
								<path d="M19 17v4" />
								<path d="M3 5h4" />
								<path d="M17 19h4" />
							</svg>
							<span v-if="!isCollapsed || isMobile" class="nav-text text-sm font-medium">
								History
							</span>
						</a>

						<a
							href="#"
							class="nav-item text-base-content/70 hover:bg-base-300 hover:text-base-900 group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
							:class="{ 'justify-center': isCollapsed && !isMobile }"
							@click="closeMobileDrawer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
							</svg>
							<span v-if="!isCollapsed || isMobile" class="nav-text text-sm font-medium">
								Starred
							</span>
						</a>

						<a
							href="#"
							class="nav-item text-base-content/70 hover:bg-base-300 hover:text-base-900 group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
							:class="{ 'justify-center': isCollapsed && !isMobile }"
							@click="closeMobileDrawer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path
									d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
								/>
								<circle cx="12" cy="12" r="3" />
							</svg>
							<span v-if="!isCollapsed || isMobile" class="nav-text text-sm font-medium">
								Settings
							</span>
						</a>
					</nav>

					<!-- Projects Section -->
					<nav class="mt-6 space-y-1 px-3">
						<div v-if="!isCollapsed" class="px-3 py-2">
							<div
								class="text-base-content/60 text-xs font-semibold tracking-wider uppercase"
							>
								Projects
							</div>
						</div>

						<a
							href="#"
							class="nav-item text-base-content/70 hover:bg-base-300 hover:text-base-900 group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
							:class="{ 'justify-center': isCollapsed && !isMobile }"
							@click="closeMobileDrawer"
						>
							<div class="h-2 w-2 rounded-full bg-blue-500"></div>
							<span v-if="!isCollapsed || isMobile" class="nav-text text-sm font-medium">
								Design Engineering
							</span>
						</a>

						<a
							href="#"
							class="nav-item text-base-content/70 hover:bg-base-300 hover:text-base-900 group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
							:class="{ 'justify-center': isCollapsed && !isMobile }"
							@click="closeMobileDrawer"
						>
							<div class="h-2 w-2 rounded-full bg-green-500"></div>
							<span v-if="!isCollapsed || isMobile" class="nav-text text-sm font-medium">
								Sales & Marketing
							</span>
						</a>

						<a
							href="#"
							class="nav-item text-base-content/70 hover:bg-base-300 hover:text-base-900 group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
							:class="{ 'justify-center': isCollapsed && !isMobile }"
							@click="closeMobileDrawer"
						>
							<div class="h-2 w-2 rounded-full bg-purple-500"></div>
							<span v-if="!isCollapsed || isMobile" class="nav-text text-sm font-medium">
								Travel
							</span>
						</a>

						<a
							href="#"
							class="nav-item text-base-content/70 hover:bg-base-300 hover:text-base-900 group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200"
							:class="{ 'justify-center': isCollapsed && !isMobile }"
							@click="closeMobileDrawer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14" />
								<path d="M12 5v14" />
							</svg>
							<span v-if="!isCollapsed || isMobile" class="nav-text text-sm font-medium">
								More
							</span>
						</a>
					</nav>
				</div>

				<!-- User Section -->
				<div class="border-base-300 border-t p-4">
					<div class="flex items-center gap-3">
						<div class="avatar">
							<div class="bg-base-300 flex h-8 w-8 items-center justify-center rounded-full">
								<span class="text-xs font-medium">U</span>
							</div>
						</div>
						<div v-if="!isCollapsed || isMobile" class="min-w-0 flex-1">
							<div class="truncate text-sm font-medium">username@acme.com</div>
							<div class="text-base-content/60 text-xs">Enterprise</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
