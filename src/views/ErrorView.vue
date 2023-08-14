<template>
	<BaseLayout :title="code" :content_title="name">
		<div class="alert alert-danger" role="alert">
			<div class="float_left me-3">
				<ion-icon v-pre name="warning"></ion-icon>
			</div>
			<div class="h-100 d-flex justify-content-center align-items-center">
				<h5>{{ description }}</h5>
			</div>
		</div>
	</BaseLayout>
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "./BaseLayout.vue";

export default {
	name: "ErrorView",
	components: { BaseLayout },
	computed: {
		...mapGetters("error", ["code", "name", "description"]),
	},
};
</script>
