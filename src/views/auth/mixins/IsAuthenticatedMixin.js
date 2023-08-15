export default {
    created() {
        if (localStorage.getItem("access_token") && localStorage.getItem("user_id")) {
            // TODO: Redirect to the user's profile page
            this.$router.push({ name: "home" });
        }
    }
}