import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import FAQsView from "../views/FaqsView.vue";
import FeedbackView from "../views/FeedbackView.vue";
import ErrorView from "../views/ErrorView.vue";

import blog_routes from "./blog_routes.js";

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
			path: "/:pathMatch(.*)*",
			redirect: "/error",
		},
	],
});

export default router;
