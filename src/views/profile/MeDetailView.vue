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
				<div class="user-info__details mb-5">
					<p>
						<b>Username: </b> &nbsp; {{ user_response.username }} <br />
						<b>Registered on the site: </b> &nbsp;
						{{ format_date(user_response.created) }}
					</p>
				</div>
				<div
					class="user-info__buttons mt-5 d-flex justify-content-between align-items-center"
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
import { delete_user } from "@/api/profile";

import ProfileMixin from "./mixins/ProfileMixin";
import ProfileLayout from "./ProfileLayout.vue";

export default {
	name: "UserDetailView",
	mixins: [ProfileMixin],
	components: { ProfileLayout },
	computed: {
        tab() { return "overview" }
	},
	methods: {
		format_date(input_date) {
			const date = new Date(input_date);
			const day = String(date.getDate()).padStart(2, "0");
			const month = String(date.getMonth() + 1).padStart(2, "0");
			const year = date.getFullYear();

			return `${day}.${month}.${year}`;
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
