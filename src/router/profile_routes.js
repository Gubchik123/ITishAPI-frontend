import MeDetailView from "../views/profile/MeDetailView.vue";
import UserDetailView from "../views/profile/UserDetailView.vue";
import UserPostsView from "../views/profile/UserPostsView.vue";

export default [
	{
		path: "me",
		name: "me",
		component: MeDetailView,
        meta: { requires_auth: true }
	},
	{
		path: "me/posts",
		name: "my-posts",
		component: UserPostsView,
        meta: { requires_auth: true }
	},
	{
		path: ":username",
		name: "user",
		component: UserDetailView,
	},
	{
		path: ":username/posts",
		name: "user-posts",
		component: UserPostsView,
	},
];
