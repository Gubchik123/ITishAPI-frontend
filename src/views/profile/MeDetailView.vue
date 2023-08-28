<template>
	<ProfileLayout title="overview" :username="$route.params.username || 'me'">
		<h4>User details</h4>
		<template v-if="user_response === null">
			<p>Loading...</p>
		</template>
		<template v-else>
			<div
				class="user-overview d-flex flex-column justify-content-around"
			>
				<div class="user-info__details">
					<p>
						<b>Registered on the site: </b> &nbsp;
						{{ format_date(user_response.created) }}
					</p>
                    <hr>
					<form
						@submit.prevent="update"
						class="text-white"
					>
						<!-- Username field -->
						<div class="mt-3">
							<div class="form-floating">
								<input
									v-model.lazy.trim="user_response.username"
									@input="message = null"
									required=""
									type="text"
									id="username"
									minlength="3"
									maxlength="50"
									class="form-control"
									placeholder="Username"
								/>
								<label for="username" class="text-black">
									Username
								</label>
							</div>
						</div>
						<!-- Email field -->
						<div class="mt-3">
							<div class="form-floating">
								<input
									v-model.lazy.trim="user_response.email"
									@input="message = null"
									id="email"
									required=""
									type="email"
									minlength="10"
									maxlength="255"
									placeholder="Email"
									class="form-control"
								/>
								<label for="email" class="text-black">
									Email
								</label>
							</div>
						</div>
						<!-- Sign up button -->
						<div class="mt-2">
                            <button class="btn btn-success btn-lg mt-2">
                                Update
                            </button>
                        </div>
					</form>
                    <hr>
				</div>
				<div
					class="user-info__buttons d-flex justify-content-between align-items-center"
				>
					<router-link
						:to="'/user/' + user_response.username"
						class="btn btn-primary btn-lg float_left me-3"
					>
						Profile preview
					</router-link>
					<a
						@click.prevent="logout"
						href=""
						class="btn btn-primary btn-lg float_left me-3"
					>
						Log out
					</a>
					<a
						@click.prevent="delete_profile"
						href=""
						class="btn btn-danger delete-btn"
					>
						Delete profile
					</a>
				</div>
			</div>
		</template>
	</ProfileLayout>
</template>

<script>
import { update_user, delete_user } from "@/api/profile";

import ProfileMixin from "@/mixins/ProfileMixin";
import ProfileLayout from "@/layouts/ProfileLayout.vue";

export default {
	name: "UserDetailView",
	mixins: [ProfileMixin],
	components: { ProfileLayout },
	computed: {
		tab() {
			return "overview";
		},
	},
	methods: {
		format_date(input_date) {
			const date = new Date(input_date);
			const day = String(date.getDate()).padStart(2, "0");
			const month = String(date.getMonth() + 1).padStart(2, "0");
			const year = date.getFullYear();

			return `${day}.${month}.${year}`;
		},
        update() {
            update_user(this.user_response, this.server_url).then(() => {
                alert("User updated successfully");
            });
        },
		logout() {
			localStorage.removeItem("user_id");
			localStorage.removeItem("access_token");
			this.$router.push({ name: "home" });
		},
		delete_profile() {
			delete_user(this.server_url).then(() => {
				this.logout();
			});
		},
	},
};
</script>
