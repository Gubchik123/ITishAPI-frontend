<template>
	<BaseLayout :title="'Blog - ' + title" :content_title="title">
		<div
			class="site-header sticky-top py-2 d-flex justify-content-end mb-4 border-2 border-bottom border-info my-text-color my-body-bg-color"
		>
			<div class="btn-group btn-group-lg">
				<router-link
                    :to="{ name: 'posts' }"
                    :class="{
						'active disabled': $route.name === 'posts',
					}"
					class="btn btn-primary"
                >
                    Posts
                </router-link>
                <router-link
                    :to="{ name: 'tags' }"
                    :class="{
						'active disabled': $route.name === 'tags',
					}"
					class="btn btn-primary"
                >
                    Tags
                </router-link>
			</div>
		</div>

		<slot></slot>
	</BaseLayout>
</template>

<script>
import BaseLayout from "../BaseLayout.vue";

export default {
	name: "BlogLayout",
	components: { BaseLayout },
	props: { title: String },
};
</script>
