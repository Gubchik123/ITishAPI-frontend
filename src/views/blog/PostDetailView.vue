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
				<like-button
                    :likes="post_likes"
                    :post_id="post.id"
                    :user_id="current_user_id()"
                    @add_like="add_like"
                    @delete_like="delete_like"
                />
			</div>
		</div>

		<hr />
		<!-- Post info -->
		<item-info :item="post" />
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

		<div v-if="is_user_authenticated()" class="comment-form w-100 mb-5">
            <comment-form 
                @add_comment="add_comment"
                :post_id="post.id"
                :user_id="current_user_id()"
            />
        </div>
        <Alert
            v-else
            category="warning"
            message="Log in to has ability to comment post"
        />

		<!-- Comments -->
		<Alert
			v-if="post_comments.length === 0"
			category="primary"
			message="There are not any comments yet"
		/>
		<div v-else class="all-comments w-100">
			<comment-list :comments="post_comments" />
		</div>
	</BaseLayout>

	<BaseLayout v-else title="Loading..." content_title="Loading..." />
</template>

<script>
import { mapGetters } from "vuex";

import BaseLayout from "../BaseLayout.vue";
import Alert from "../../components/Alert.vue";
import UserMixin from "../../mixins/UserMixin.js";

import LikeButton from "./components/LikeButton.vue";
import ItemInfo from "./components/ItemInfo.vue";
import CommentList from "./components/CommentList.vue";
import CommentForm from "./components/CommentForm.vue";
import { get_post, get_post_likes, get_post_comments } from "../../api/blog.js";

export default {
	name: "PostDetailView",
	mixins: [UserMixin],
	components: { BaseLayout, Alert, LikeButton, ItemInfo, CommentForm, CommentList },
	data() {
		return { post: null, post_likes: [], post_comments: [] };
	},
	created() {
		setTimeout(() => {
			get_post(this.server_url, this.$route.params.slug).then(
				(response) => (this.post = response)
			);
			get_post_likes(this.server_url, this.$route.params.slug).then(
				(response) => (this.post_likes = response)
			);
			get_post_comments(this.server_url, this.$route.params.slug).then(
				(response) => (this.post_comments = response)
			);
		}, 1000);
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
		full_url() {
			return location.href;
		},
	},
    methods: {
        add_like(user_id) {
            this.post_likes.push(user_id);
        },
        delete_like(user_id) {
            this.post_likes = this.post_likes.filter(id => id !== user_id);
        },
        add_comment(comment) {
            this.post_comments.unshift(comment);
        }
    }
};
</script>

<style scoped>
#edit-btn {
	width: 50px;
}

.tag {
	background-color: var(--bs-primary);
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

.all-comments .item_author a {
	color: var(--bs-dark);
}
</style>
