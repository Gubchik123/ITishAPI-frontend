<template>
    <div class="wrapper d-flex flex-column min-vh-100">
        <Header />
        <router-view />
        <go-to-top-button />
        <Footer />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import GoToTopButton from "./components/buttons/GoToTopButton.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
    components: { Header, GoToTopButton, Footer }
};
</script>
