import MeDetailView from "../views/profile/MeDetailView.vue";
import UserDetailView from "../views/profile/UserDetailView.vue";
import UserPostsView from "../views/profile/UserPostsView.vue";
import UserCommentsView from "../views/profile/UserCommentsView.vue";
import UserLikesView from "../views/profile/UserLikesView.vue";

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
		path: "me/comments",
		name: "my-comments",
		component: UserCommentsView,
        meta: { requires_auth: true }
	},
	{
		path: "me/likes",
		name: "my-likes",
		component: UserLikesView,
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
	{
		path: ":username/comments",
		name: "user-comments",
		component: UserCommentsView,
	},
	{
		path: ":username/likes",
		name: "user-likes",
		component: UserLikesView,
	},
];
