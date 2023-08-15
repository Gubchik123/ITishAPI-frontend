export default {
    beforeCreate() {
        if (localStorage.getItem("access_token")) {
            // TODO: Redirect to the user's profile page
            this.$router.push({ name: "home" });
        }
    }
}