<template>
	<BaseLayout
		v-if="tag_posts"
		:title="'#' + $route.params.slug"
		:content_title="'Posts with `' + $route.params.slug + '`'"
	>
		<Post :key="post.id" v-for="post in tag_posts" :post="post" />
	</BaseLayout>

	<BaseLayout v-else title="All tag posts" content_title="All tag posts">
		<template v-if="tag_posts === null">
			<post-placeholder :key="index" v-for="index in 5" />
		</template>
		<template v-else>
			<Alert category="primary" message="There are no tag posts yet" />
		</template>
	</BaseLayout>
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "../BaseLayout.vue";
import Alert from "../../components/Alert.vue";
import { get_all_tag_posts } from "../../api/blog";

import Post from "./components/Post.vue";
import PostPlaceholder from "./components/PostPlaceholder.vue";

export default {
	name: "TagDetailView",
	components: { BaseLayout, Post, PostPlaceholder, Alert },
	data() {
		return { tag_posts: null };
	},
	created() {
		get_all_tag_posts(this.server_url, this.$route.params.slug).then(
			(response) => {
				this.tag_posts = response;
			}
		);
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
	},
};
</script>

<style scoped>
.item_info {
	color: white;
}
</style>
