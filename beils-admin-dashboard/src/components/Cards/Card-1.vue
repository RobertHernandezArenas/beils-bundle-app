<template>
	<!--begin::Card-->
	<div class="card">
		<!--begin::Card body-->
		<div class="card-body p-0">
			<!--begin::Heading-->
			<div class="card-px text-center py-20 my-10">
				<!--begin::Title-->
				<h2 class="fs-2x fw-bold mb-10">{{ props.title }}</h2>
				<!--end::Title-->

				<!--begin::Description-->
				<p class="text-gray-500 fs-5 fw-semibold mb-13">
					<span v-html="props.description"></span>
				</p>
				<!--end::Description-->

				<!--begin::Action-->
				<button
					type="button"
					class="btn btn-primary er fs-6 px-8 py-4"
					data-bs-toggle="modal"
					:data-bs-target="`#${props.modalId}`"
				>
					{{ props.buttonText }}
				</button>
				<!--end::Action-->
			</div>
			<!--end::Heading-->

			<!--begin::Illustration-->
			<div class="text-center px-5">
				<img :src="props.image" alt="" class="mw-100 mh-300px" />
			</div>
			<!--end::Illustration-->
		</div>
		<!--end::Card body-->
	</div>
	<!--end::Card-->
</template>

<script setup lang="ts">
	const props = defineProps({
		title: String,
		description: String,
		buttonText: String,
		image: String,
		modalId: String
	})
</script>
