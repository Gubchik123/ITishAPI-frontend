<template>
	<BaseLayout
		v-if="post"
		:title="'Post - ' + post.title"
		:content_title="post.title"
	>
		<div
			class="tags_and_likes mb-2 d-flex justify-content-between align-items-center"
		>
			<div class="tags">
                <router-link
                    :key="tag.id"
                    v-for="tag in post.tags"
                    :to="{ name: 'tag', params: { slug: tag.slug } }"
                    class="d-inline float_left me-3 mb-3 text-decoration-none"
                >
                    <span
                        style="line-height: 1.5em"
                        class="tag badge border rounded"
                    >
                        #{{ tag.title }}
                    </span>
                </router-link>
				<span 
                    v-if="post.tags.length === 0" 
                    class="rounded text-bg-warning px-2 py-1"
                >
					There are not any tags yet
				</span>
			</div>
			<div class="likes">
				<button
					type="button"
					id="like-button"
					class="btn position-relative border-0"
				>
					<!-- TODO: 
                        1. Disable button, if user is not authenticated 
                        2. Add "-outline" to icon name, if user has not liked post yet
                    -->
					<ion-icon
						v-pre
						id="like-icon"
						name="heart-outline"
					></ion-icon>
					<span
						id="like-count"
						class="position-absolute top-0 start-100 translate-middle badge rounded-pill my-form-bg-color"
					>
						0
						<!-- TODO: {{ post_likes.length }} -->
					</span>
				</button>
			</div>
		</div>

		<hr />
		<!-- Post info -->
		<post-info :item="post" />
		<hr class="mt-3" />

		<!-- Post body -->
		<div v-html="post.body"></div>

		<!-- Share links -->
		<div class="share-links d-flex justify-content-center mt-2">
			<div class="links d-flex align-items-center my-2">
				<!-- Share link for Telegram -->
				<a
					target="_blank"
					class="float_left me-4"
					:href="'https://t.me/share/url?url=' + full_url"
				>
					<ion-icon v-pre name="send"></ion-icon>
				</a>
				<!-- Share link for Facebook -->
				<a
					target="_blank"
					class="float_left me-4"
					:href="'https://www.facebook.com/sharer.php?u=' + full_url"
				>
					<ion-icon v-pre name="logo-facebook"></ion-icon>
				</a>
				<!-- Share link for LinkedIn -->
				<a
					target="_blank"
					class="float_left me-4"
					:href="
						'https://www.linkedin.com/sharing/share-offsite/?url=' +
						full_url
					"
				>
					<ion-icon v-pre name="logo-linkedin"></ion-icon>
				</a>
				<!-- Share link for Email -->
				<a
					target="_blank"
					:href="
						'mailto:?subject=Check-' +
						post.title +
						'&body=' +
						full_url
					"
				>
					<ion-icon v-pre name="mail-outline"></ion-icon>
				</a>
			</div>
		</div>

		<hr class="my-2" />

		<h2 class="mb-3">Comments</h2>

		<!-- TODO: Add comment form if user is authenticated -->

		<Alert
			category="warning"
			message="Log in to has ability to comment post"
		/>

		<!-- TODO: 
        <div class="all-comments w-100">
            <comment-list :comments="post_comments" />
        </div>  -->

		<Alert category="primary" message="There are not any comments yet" />
	</BaseLayout>

	<BaseLayout v-else title="Loading..." content_title="Loading..." />
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "../BaseLayout.vue";
import Alert from "../../components/Alert.vue";

import { get_post } from "../../api/blog.js";
import PostInfo from "./components/PostInfo.vue";

export default {
	name: "PostDetailView",
	components: { BaseLayout, Alert, PostInfo },
	data() {
		return { post: null, post_tags: [], post_likes: [], post_comments: [] };
	},
	created() {
		setTimeout(() => {
			get_post(this.server_url, this.$route.params.slug).then(
				(response) => {
					this.post = response;
				}
			);
		}, 1000);
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
		full_url() {
			return location.href;
		},
	},
};
</script>

<style scoped>
#edit-btn {
	width: 50px;
}

.tag {
	background-color: var(--bs-primary);
}

#like-icon {
	color: red;
}

.item_author a {
	color: var(--my-text-color);
}

.share-links .links {
	font-size: 1.5em;
}

@media screen and (max-width: 576px) {
	.share-links .links {
		font-size: 1em;
	}
}

#comment_body {
	height: 150px;
}

.all-comments .item_author a {
	color: var(--bs-dark);
}
</style>
