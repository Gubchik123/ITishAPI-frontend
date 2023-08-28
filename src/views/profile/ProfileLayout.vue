<template>
	<BaseLayout :title="'User ' + title" :content_title="'User ' + title">
		<div
			class="site-header sticky-top py-2 d-flex justify-content-end mb-4 border-2 border-bottom border-info my-text-color my-body-bg-color"
		>
			<div class="btn-group btn-group-lg">
				<router-link
					:to="'/user/' + username"
					:class="{
						'active disabled': ['user', 'me'].includes($route.name),
					}"
					class="btn btn-primary"
				>
					Overview
				</router-link>
				<router-link
					:to="'/user/' + username + '/' + 'posts'"
					:class="{
						'active disabled': $route.name.endsWith('-posts'),
					}"
					class="btn btn-primary"
				>
					Posts
				</router-link>
				<router-link
					:to="'/user/' + username + '/' + 'comments'"
					:class="{
						'active disabled': $route.name.endsWith('-comments'),
					}"
					class="btn btn-primary"
				>
					Comments
				</router-link>
				<router-link
					:to="'/user/' + username + '/' + 'likes'"
					:class="{
						'active disabled': $route.name.endsWith('-likes'),
					}"
					class="btn btn-primary"
				>
					Likes
				</router-link>
			</div>
		</div>

		<h2 class="mb-3">{{ username }}</h2>
		<div class="user-avatar col-md-4 col-sm-12 mb-3">
			<div class="d-flex justify-content-center">
				<img
					ref="avatar"
					class="w-75 rounded"
					alt="User avatar"
					src=""
				/>
			</div>
			<form
				@submit.prevent="update_avatar"
				v-if="is_user_authenticated() && username === 'me'"
			>
				<div class="mt-3">
					<input
						ref="avatar_input"
						type="file"
						required=""
						class="form-control"
					/>
				</div>

				<div class="text-center">
					<div class="mt-2">
						<button class="btn btn-success btn-lg mt-2">
							Update avatar
						</button>
					</div>
				</div>
			</form>
		</div>
		<div class="user-info col-md-8 col-sm-12">
			<slot></slot>
		</div>
	</BaseLayout>
</template>

<script>
import { mapGetters } from "vuex";
import UserMixin from "@/mixins/UserMixin";
import { update_user_avatar } from "@/api/profile";

import BaseLayout from "@/layouts/BaseLayout.vue";

export default {
	name: "ProfileLayout",
	mixins: [UserMixin],
	components: { BaseLayout },
	props: {
		title: { type: String, required: true },
		username: { type: String, required: true },
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
	},
	mounted() {
		this.$refs.avatar.src = `${this.server_url}/user/${
			this.username
		}/avatar?id=${localStorage.getItem("user_id")}`;
	},
	methods: {
		update_avatar() {
			update_user_avatar(
				this.$refs.avatar_input.files[0],
				this.username,
				this.server_url
			).catch((error) => {
                alert("Error updating avatar")
            })
		},
	},
};
</script>
