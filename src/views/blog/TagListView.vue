<template>
	<BlogLayout title="All tags">
		<div
			v-if="tags === null"
			class="tags d-flex flex-wrap justify-content-between placeholder-glow"
		>
			<!-- Tag placeholders -->
			<a
				v-for="index in 7"
				:key="index"
				href="#"
                style="width: 100px; height: 50px;"
				class="d-inline float_left me-3 mb-3 text-bg-secondary border rounded placeholder-lg"
			></a>
		</div>
		<template v-else-if="Array.isArray(tags) && tags.length === 0">
			<Alert category="primary" message="There are no tags yet" />
		</template>
		<div
			v-else
			ref="tags"
			class="tags d-flex flex-wrap justify-content-between"
		>
			<!-- Tags -->
            <router-link
                v-for="tag in tags"
				:key="tag.id"
                :to="{ name: 'tag', params: { slug: tag.slug }}"
				class="d-inline float_left me-3 mb-3 text-decoration-none"
            >
                <span
					:style="{
						fontSize: is_mobile
							? '1em'
							: `${Math.random() * 1 + 1}em`,
					}"
					:class="
						'text-bg-' +
						badge_bg_colors[
							Math.floor(
								Math.random() * this.badge_bg_colors.length
							)
						]
					"
					style="line-height: 1.5em"
					class="tag badge border rounded"
				>
					#{{ tag.title }}
				</span>
            </router-link>
		</div>
	</BlogLayout>
</template>

<script>
import { mapGetters } from "vuex";

import BlogLayout from "./BlogLayout.vue";
import Alert from "../../components/Alert.vue";
import { get_all_tags } from "../../api/blog";

export default {
	name: "TagListView",
	components: { BlogLayout, Alert },
	data() {
		return {
			tags: null,
			badge_bg_colors: [
				"dark",
				"info",
				"light",
				"danger",
				"primary",
				"warning",
				"success",
				"secondary",
			],
		};
	},
	created() {
		setTimeout(() => {
			// To look at tag placeholders
			get_all_tags(this.server_url).then((response) => {
				this.tags = response;
			});
		}, 1000);
	},
	computed: {
		...mapGetters("backend", ["server_url"]),
		is_mobile() {
			return window.outerWidth < 576;
		},
	},
};
</script>

<style scoped>
@media screen and (max-width: 452px) {
	.badge {
		font-size: 1em !important;
	}
}
</style>
