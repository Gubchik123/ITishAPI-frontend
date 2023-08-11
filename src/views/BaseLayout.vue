<template>
	<main class="my-4">
		<div class="container">
			<div class="row">
				<div class="d-flex justify-content-between align-items-center">
					<h1 class="mb-4">
						{{ content_title }}
					</h1>

                    <slot name="near_content_title"></slot>
				</div>
			</div>
			<div class="row content_block">
				<slot></slot>
			</div>
		</div>
	</main>
</template>

<script>
export default {
    name: "BaseLayout",
    props: {
        title: { type: String, required: true },
        content_title: { type: String, required: true }
    },
    mounted() { document.title = `${this.title} | ITishAPI`; }
};
</script>
