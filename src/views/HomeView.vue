<template>
	<BaseLayout content_title="Home page">
		<div>
			<h4 class="mb-3">Welcome to the blog site:</h4>

			<img
				alt="Site header image"
				class="img-fluid rounded-4 w-100"
				src="../assets/images/site_header.png"
			/>

			<p class="mt-5">
				Here, every novice blogger can try his hand at writing posts and
				developing himself as a blogger. I hope everyone can find
				something new and interesting here.
			</p>

			<p><b>Project author:</b> &nbsp; Nikita Hubariev</p>
		</div>
	</BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout.vue";

export default {
    name: "HomeView",
    components: { BaseLayout }
};
</script>
