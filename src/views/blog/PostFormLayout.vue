<template>
	<BaseLayout :title="action + ' post'" :content_title="action + ' post'">
		<slot></slot>

		<form @submit.prevent="submit">
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
                    {{ action }} post
                </button>
            </div>
            <p>Separator - comma</p>
		</form>
	</BaseLayout>
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "@/layouts/BaseLayout.vue";

export default {
	name: "PostCreateView",
	components: { BaseLayout },
    props: {
        post: {
            type: Object,
            default: () => ({
                title: "",
                body: "",
                tags: "",
            }),
        },
        action: { type: String, required: true },
    },
    computed: {
        ...mapGetters("backend", ["server_url"]),
    },
    methods: {
        submit() {
            this.$emit("submit", this.post, this.server_url);
        }
    }
};
</script>

<style scoped>
textarea {
    height: 150px!important;
}
</style>
