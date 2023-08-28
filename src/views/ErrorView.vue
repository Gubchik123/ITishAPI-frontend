<template>
	<BaseLayout :title="code" :content_title="name">
        <Alert 
            category="danger"
            :message="description"
        />
	</BaseLayout>
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "@/layouts/BaseLayout.vue";
import Alert from "../components/Alert.vue";

export default {
	name: "ErrorView",
	components: { BaseLayout, Alert },
	computed: {
		...mapGetters("error", ["code", "name", "description"]),
	},
};
</script>
