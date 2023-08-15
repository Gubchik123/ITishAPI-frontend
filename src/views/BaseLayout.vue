<template>
    <Header @logout="logout" :is_user_authenticated="is_user_authenticated" />

	<main class="my-4">
		<div class="container">
			<div class="row">
				<div class="d-flex justify-content-between align-items-center">
					<h1 class="mb-4">
						{{ content_title }}
					</h1>

                    <slot name="near_content_title"></slot>
				</div>
			</div>
			<div class="row content_block">
				<slot></slot>
			</div>
		</div>
	</main>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    name: "BaseLayout",
    components: { Header },
    props: {
        title: { type: String, required: true },
        content_title: { type: String, required: true }
    },
    data() {
        return { is_user_authenticated: false, };
    },
    beforeMount() {
        this.update_is_user_authenticated();
    },
    mounted() { document.title = `${this.title} | ITishAPI`; },
    methods: {
        logout() {
            localStorage.removeItem("user_id");
            localStorage.removeItem("access_token");
            this.update_is_user_authenticated();
        },
        update_is_user_authenticated() {
            this.is_user_authenticated = localStorage.getItem("access_token") ? true : false;
        }
    },
};
</script>
