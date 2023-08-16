import MeDetailView from "../views/profile/MeDetailView.vue";

export default [
	{
		path: "me",
		name: "me",
		component: MeDetailView,
        meta: { requires_auth: true }
	},
];
