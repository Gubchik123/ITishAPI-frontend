import { mapGetters } from "vuex";

import { get_user_tab } from "@/api/profile";

export default {
	data() {
		return { user_response: null };
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
	},
	created() {
		get_user_tab(
			this.$route.params.username || "me",
			this.tab,
			this.server_url
		)
			.then((response) => {
				this.user_response = response;
			})
			.catch(() => this.$router.push({ name: "error" }));
	},
};
