import MeDetailView from "../views/profile/MeDetailView.vue";
import UserDetailView from "../views/profile/UserDetailView.vue";

export default [
	{
		path: "me",
		name: "me",
		component: MeDetailView,
        meta: { requires_auth: true }
	},
	{
		path: ":username",
		name: "user",
		component: UserDetailView,
	},
];
