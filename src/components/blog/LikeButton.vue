<template>
	<button
		:disabled="!is_user_authenticated"
		@click="add_or_delete_like"
		type="button"
		id="like-button"
		class="btn position-relative border-0"
	>
		<ion-icon
			v-if="is_user_authenticated && is_liked_by_user"
			id="like-icon"
			name="heart"
		></ion-icon>
		<ion-icon v-else id="like-icon" name="heart-outline"></ion-icon>
		<span
			id="like-count"
			class="position-absolute top-0 start-100 translate-middle badge rounded-pill my-form-bg-color"
		>
			{{ likes.length }}
		</span>
	</button>
</template>

<script>
import { mapGetters } from "vuex";

import { create_like, delete_like } from "@/api/blog.js";

export default {
	name: "LikeButton",
	props: {
		likes: {
			type: Array,
			required: true,
		},
		post_id: {
			type: Number,
			required: true,
		},
		user_id: {
			type: Number,
			required: true,
		},
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
		is_user_authenticated() {
			return this.user_id !== 0;
		},
		is_liked_by_user() {
			return this.likes.includes(this.user_id);
		},
	},
	methods: {
		add_or_delete_like() {
			if (this.is_liked_by_user)
				delete_like(this.post_id, this.server_url).then(() => {
					this.$emit("delete_like", this.user_id);
				});
			else
				create_like(this.post_id, this.server_url).then(() => {
					this.$emit("add_like", this.user_id);
				});
		},
	},
};
</script>

<style scoped>
#like-icon {
	color: red;
}
</style>
