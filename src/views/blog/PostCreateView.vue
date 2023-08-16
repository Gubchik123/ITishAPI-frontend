<template>
	<BaseLayout title="Create post" content_title="Create post">
		<details>
			<summary>How to create post? (Note)</summary>
			<div
				class="note-alert alert alert-secondary border-left"
				role="alert"
			>
				<ul>
					<li>Make sure your title doesn't exist.</li>
					<li>You can use special embaded site to create post.</li>
					<li>Use a comma as separator for post tags (optional).</li>
				</ul>
				<h5>Good luck!</h5>
			</div>
		</details>
		<details>
			<summary>Special embaded site</summary>
			<iframe
				width="100%"
				height="500px"
				frameborder="0"
				src="https://post-html-generator.netlify.app/"
			></iframe>
		</details>

		<form @submit.prevent="create">
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
					<label for="comment_body" class="text-black">
						Body
					</label>
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
                <button class="btn btn-lg btn-success">
                    Create post
                </button>
            </div>
            <p>Separator - comma</p>
		</form>
	</BaseLayout>
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "../BaseLayout.vue";
import LoginRequiredMixin from "@/mixins/LoginRequiredMixin";

import { create_post } from "@/api/blog";

export default {
	name: "PostCreateView",
	components: { BaseLayout },
	mixins: [LoginRequiredMixin],
    data() {
        return {
            post: {
                title: "",
                body: "",
                tags: "",
            }
        };
    },
    computed: {
        ...mapGetters("backend", ["server_url"]),
    },
    methods: {
        create() {
            create_post(this.post, this.server_url)
                .then(() => {
                    this.$router.push({ name: "posts" });
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
};
</script>

<style scoped>
.note-alert {
	border-left: 8px solid;
}
textarea {
    height: 150px!important;
}
</style>
