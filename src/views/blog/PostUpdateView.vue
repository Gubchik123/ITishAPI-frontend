<template>
	<PostFormLayout :post="post" @submit="update" action="Update" />
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import { get_post, update_post } from "@/api/blog";

import PostFormLayout from "../../layouts/PostFormLayout.vue";

export default {
	name: "PostUpdateView",
	components: { PostFormLayout },
	data() {
		return {
			post: {
				title: "",
				content: "",
				tags: "",
			},
		};
	},
	created() {
		get_post(this.server_url, this.$route.params.slug).then((response) => {
			this.post = response;
			if (+localStorage.getItem("user_id") != this.post.user_id) {
				this.SET_ERROR({
					code: 403,
					name: "Forbidden",
					description: "You are not allowed to this page",
				});
				this.$router.push({ name: "error" });
				return;
			}
			this.post.tags = this.post.tags.map((tag) => tag.title).join(", ");
		});
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
	},
	methods: {
		...mapMutations("error", ["SET_ERROR"]),
		update(post, server_url) {
			update_post(post, server_url)
				.then(() => {
					this.$router.push({
						name: "post",
						params: { slug: post.slug },
					});
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>
