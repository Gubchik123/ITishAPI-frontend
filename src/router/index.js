import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import FAQsView from "../views/FaqsView.vue";
import FeedbackView from "../views/FeedbackView.vue";
import ErrorView from "../views/ErrorView.vue";

import blog_routes from "./routes/blog.js";
import auth_routes from "./routes/auth.js";
import profile_routes from "./routes/profile.js";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			alias: "/home",
			component: HomeView,
		},
		{
			path: "/faqs",
			name: "faqs",
			component: FAQsView,
		},
		{
			path: "/feedback",
			name: "feedback",
			component: FeedbackView,
		},
		{
			path: "/error",
			name: "error",
			component: ErrorView,
		},
		{
			path: "/blog",
			name: "blog",
			redirect: "/blog/posts",
			children: blog_routes,
		},
		{
			path: "/auth",
			name: "auth",
			redirect: "/auth/login",
			children: auth_routes,
		},
		{
			path: "/user",
			name: "user",
			redirect: "/user/me",
			children: profile_routes,
		},
		{
			path: "/:pathMatch(.*)*",
			redirect: "/error",
		},
	],
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requires_auth)) {
		if (localStorage.getItem("access_token")) next();
        else next({ name: "login" });
	} else next();
});

export default router;
