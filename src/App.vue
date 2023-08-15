<template>
    <div class="wrapper d-flex flex-column min-vh-100">
        <!-- Header component in the views/BaseLayout.vue -->
        <router-view />
        <go-to-top-button />
        <Footer />
    </div>
</template>

<script>
import GoToTopButton from "./components/buttons/GoToTopButton.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
    components: { GoToTopButton, Footer }
};
</script>
