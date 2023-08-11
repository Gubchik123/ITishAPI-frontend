<template>
	<button ref="go_to_top_btn" name="Go to top" id="go-to-top-btn">
		<ion-icon v-pre name="arrow-up-outline"></ion-icon>
	</button>
</template>

<script>
export default {
	name: "GoToTopButton",
	mounted() {
		window.addEventListener("scroll", this.on_scroll);
		this.$refs.go_to_top_btn.addEventListener("click", function () {
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and
		});
	},
	beforeUnmount() {
		window.removeEventListener("scroll", this.on_scroll);
	},
	methods: {
		on_scroll() {
			if (
				document.body.scrollTop > 200 ||
				document.documentElement.scrollTop > 200
			)
				this.$refs.go_to_top_btn.classList =
					"rounded-circle d-flex justify-content-center align-items-center";
			else this.$refs.go_to_top_btn.classList = "";
		},
	},
};
</script>

<style scoped>
#go-to-top-btn {
	z-index: 80;
	border: none;
	opacity: 0.8;
	outline: none;
	position: fixed;
	transition: 0.2s;
	width: 50px;
	height: 50px;
	right: 30px;
	bottom: 30px;
	display: none; /* Hidden by default */

	color: var(--my-text-color);
	background-color: var(--my-form-bg-color);
}
#go-to-top-btn:hover {
	opacity: 1;
}
</style>
