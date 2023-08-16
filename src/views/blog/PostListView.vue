<template>
	<BlogLayout :title="$route.query.q ? 'Results' : 'All posts'">
		<template v-if="posts === null">
			<post-placeholder :key="index" v-for="index in 5" />
		</template>
		<template v-else-if="Array.isArray(posts) && posts.length === 0">
			<Alert
				v-if="$route.query.q"
				category="info"
				:message="
					'There are no posts with: `' + $route.query.q + '` yet'
				"
			/>
			<Alert v-else category="primary" message="There are no posts yet" />
		</template>
		<template v-else>
			<Post
				@delete_post="delete_post"
				:key="post.id"
				v-for="post in posts"
				:post="post"
				:current_user_id="current_user_id()"
			/>
		</template>
	</BlogLayout>
</template>

<script>
import { mapGetters } from "vuex";

import BlogLayout from "./BlogLayout.vue";
import Alert from "../../components/Alert.vue";
import UserMixin from "../../mixins/UserMixin";
import { get_all_posts } from "../../api/blog";

import Post from "./components/Post.vue";
import PostPlaceholder from "./components/PostPlaceholder.vue";

export default {
	name: "PostListView",
	mixins: [UserMixin],
	components: { BlogLayout, Post, PostPlaceholder, Alert },
	data() {
		return { posts: null };
	},
	created() {
		get_all_posts(this.server_url, this.$route.query.q).then((response) => {
			this.posts = response;
		});
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
	},
	methods: {
		delete_post(post_id) {
			this.posts = this.posts.filter((post) => post.id !== post_id);
		},
	},
};
</script>

<style scoped>
.item_info {
	color: white;
}
</style>
