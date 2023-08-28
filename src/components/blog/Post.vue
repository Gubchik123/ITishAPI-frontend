<template>
	<div class="post rounded my-form-bg-color p-3 mb-3">
		<router-link :to="{ name: 'post', params: { slug: post.slug } }">
			<div
				class="post_title text-decoration-underline d-flex justify-content-between"
			>
				<h3>{{ post.title }}</h3>
				<a
					v-if="post.user_id === current_user_id"
					@click.prevent="del"
					href=""
					class="btn-close btn-close-white delete-btn"
				></a>
			</div>
			<div class="post_body py-2">
				<p>
					{{ post.body.slice(0, 200) }}
					<span v-if="post.body.length > 200">...</span>
				</p>
			</div>
		</router-link>

		<item-info :item="post" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import ItemInfo from "./ItemInfo.vue";
import { delete_post } from "@/api/blog";

export default {
	name: "Post",
	components: { ItemInfo },
	props: {
		post: { type: Object, required: true },
		current_user_id: { type: Number, required: true },
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
	},
	methods: {
		del() {
			if (confirm("Are you sure you want to delete this post?")) {
				delete_post(this.post.slug, this.server_url).then(() => {
					this.$emit("delete_post", this.post.id);
				});
			}
		},
	},
};
</script>

<style scoped>
.post,
.post a,
.post p {
	color: #eee;
}
.post {
	transition: 0.5s;
}
.post:hover {
	box-shadow: 0 0 10px 0 var(--my-text-color);
}
</style>
