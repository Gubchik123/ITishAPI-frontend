export default {
    beforeCreate() {
        if (!localStorage.getItem("access_token")) {
            this.$router.push({ name: "login" });
            return;
        }
    }
}