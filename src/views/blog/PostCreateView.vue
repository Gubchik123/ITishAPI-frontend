<template>
	<PostFormLayout @submit="create" action="Create">
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
	</PostFormLayout>
</template>

<script>
import { mapGetters } from "vuex";

import { create_post } from "@/api/blog";

import PostFormLayout from "./PostFormLayout.vue";

export default {
	name: "PostCreateView",
	components: { PostFormLayout },
    computed: {
        ...mapGetters("backend", ["server_url"]),
    },
    methods: {
        create(post, server_url) {
            create_post(post, server_url)
                .then(() => {
                    this.$router.push({ name: "posts" });
                });
        }
    }
};
</script>

<style scoped>
.note-alert {
	border-left: 8px solid;
}
</style>
