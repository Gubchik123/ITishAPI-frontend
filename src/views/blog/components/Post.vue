<template>
	<div class="post rounded my-form-bg-color p-3 mb-3">
		<a href="#">
			<div
				class="post_title text-decoration-underline d-flex justify-content-between"
			>
				<h3>{{ post.title }}</h3>
				<!-- 
                    TODO: Bootstrap5 button
                    class"btn-close btn-close-white delete-btn" 
                    for deleting post
                -->
			</div>
			<div class="post_body py-2">
				<p>
					{{ post.body.slice(0, 200) }}
					<span v-if="post.body.length > 200">...</span>
				</p>
			</div>
		</a>

		<post-info :item="post" />
	</div>
</template>

<script>
import PostInfo from "./PostInfo.vue";

export default {
	name: "Post",
    components: { PostInfo },
	props: {
		post: { type: Object, required: true },
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
