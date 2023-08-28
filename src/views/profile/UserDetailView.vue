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
			</div>
		</template>
	</ProfileLayout>
</template>

<script>
import ProfileMixin from "./mixins/ProfileMixin";
import ProfileLayout from "../../layouts/ProfileLayout.vue";

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
	},
};
</script>
