import SignupView from "../views/auth/SignupView.vue";
import LoginView from "../views/auth/LoginView.vue";

export default [
    {
        path: "signup",
        name: "signup",
        component: SignupView,
    },
    {
        path: "login",
        name: "login",
        component: LoginView,
    },
]