<template>
	<button
		ref="toggle_btn"
		id="toggle-theme"
		class="my-panel-bg-color rounded-circle"
	>
		<ion-icon v-pre class="my-panel-bg-color rounded-circle"></ion-icon>
	</button>
</template>

<script>
export default {
	name: "ThemeToggler",
	mounted() {
		if (localStorage.getItem("dark-theme") == "yes") this.set_dark_mode();
		else this.$refs.toggle_btn.children[0].name = "moon";

		this.$refs.toggle_btn.addEventListener("click", this.toggle_theme);
	},
	methods: {
        toggle_theme() {
			if (document.documentElement.hasAttribute("theme")) {
				this.$refs.toggle_btn.children[0].name = "moon";
				localStorage.setItem("dark-theme", "no");
				document.documentElement.removeAttribute("theme");
			} else this.set_dark_mode();
		},
		set_dark_mode() {
			this.$refs.toggle_btn.children[0].name = "sunny";
			localStorage.setItem("dark-theme", "yes");
			document.documentElement.setAttribute("theme", "dark");
		},
	},
};
</script>

<style scoped>
#toggle-theme {
	transition: 0.3s;
}
#toggle-theme:hover {
	box-shadow: 0 0 10px 1px yellow;
}
#toggle-theme ion-icon {
	color: yellow;
}
</style>
