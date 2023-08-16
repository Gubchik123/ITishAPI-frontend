<template>
	<BaseLayout title="Update post" content_title="Update post">
		<form @submit.prevent="update">
			<!-- Title field -->
			<div class="my-3">
				<div class="form-floating">
					<input
						v-model.lazy.trim="post.title"
						required=""
						placeholder="Title"
						class="form-control"
					/>
					<label for="email" class="text-black"> Title </label>
				</div>
			</div>
			<!-- Body textarea -->
			<div class="mt-3">
				<div class="form-floating">
					<textarea
						v-model.lazy="post.body"
						required=""
						minlength="5"
						class="form-control"
						placeholder="Body"
					></textarea>
					<label for="comment_body" class="text-black"> Body </label>
				</div>
			</div>
			<!-- Tags field and submit button -->
			<div class="mt-3 d-flex justify-content-between">
				<div class="form-floating">
					<input
						v-model.lazy.trim="post.tags"
						placeholder="Tags"
						class="form-control"
					/>
					<label for="email" class="text-black"> Tags </label>
				</div>
				<button class="btn btn-lg btn-success">Update post</button>
			</div>
			<p>Separator - comma</p>
		</form>
	</BaseLayout>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import BaseLayout from "../BaseLayout.vue";
import LoginRequiredMixin from "@/mixins/LoginRequiredMixin";

import { get_post, update_post } from "@/api/blog";

export default {
	name: "PostUpdateView",
	components: { BaseLayout },
	mixins: [LoginRequiredMixin],
	data() {
		return {
			post: {
				title: "",
				body: "",
				tags: "",
			},
		};
	},
	created() {
		setTimeout(() => {
			get_post(this.server_url, this.$route.params.slug).then(
				(response) => {
					this.post = response;
                    if (+localStorage.getItem("user_id") != this.post.user_id) {
                        this.SET_ERROR({
                            code: 403,
                            name: "Forbidden",
                            description: "You are not allowed to this page",
                        });
                        this.$router.push({ name: "error" });
                    }
					this.post.tags = this.post.tags
						.map((tag) => tag.title)
						.join(", ");
				}
			);
		}, 1000);
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
	},
	methods: {
        ...mapMutations("error", ["SET_ERROR"]),
		update() {
			update_post(this.post, this.server_url)
				.then(() => {
					this.$router.push({
						name: "post",
						params: { slug: this.post.slug },
					});
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>

<style scoped>
textarea {
	height: 150px !important;
}
</style>
