<template>
	<div
		:key="comment.id"
		v-for="comment in comments"
		class="alert alert-dark"
		role="alert"
	>
		<div class="d-flex justify-content-between">
			<p>{{ comment.body }}</p>

			<a
                v-if="comment.user_id === current_user_id"
                @click.prevent="del(comment.id)"
                href=""
                class="btn-close delete-btn"
            ></a>
		</div>

		<item-info :item="comment" :is_in_profile="is_in_profile" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import ItemInfo from "./ItemInfo.vue";
import { delete_comment } from "@/api/blog";

export default {
	name: "CommentList",
	components: { ItemInfo },
	props: {
		comments: { type: Array, required: true },
		is_in_profile: { type: Boolean, default: false },
        current_user_id: { type: Number, required: true },
	},
    computed: {
		...mapGetters("backend", ["server_url"]),
	},
	methods: {
		del(comment_id) {
			if (confirm("Are you sure you want to delete this comment?")) {
				delete_comment(comment_id, this.server_url).then(() => {
					this.$emit("delete_comment", comment_id);
				});
			}
		},
	},
};
</script>
