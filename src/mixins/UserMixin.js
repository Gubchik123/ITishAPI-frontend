export default {
    methods: {
        is_user_authenticated() {
            return localStorage.getItem("access_token") ? true : false;
        },
        current_user_id() {
            return +localStorage.getItem("user_id");
        },
        access_token() {
            return localStorage.getItem("access_token");
        }
    }
}