import SignupView from "../views/auth/SignupView.vue";
import LoginView from "../views/auth/LoginView.vue";

function reject_if_user_is_authenticated(to, from, next) {
    if (localStorage.getItem("access_token")) {
        next({ name: "me" });
    } else next();
}

export default [
	{
		path: "signup",
		name: "signup",
		component: SignupView,
		beforeEnter: [reject_if_user_is_authenticated],
	},
	{
		path: "login",
		name: "login",
		component: LoginView,
		beforeEnter: [reject_if_user_is_authenticated],
	},
];
