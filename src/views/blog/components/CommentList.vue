<template>
	<div
		:key="comment.id"
		v-for="comment in comments"
		class="alert alert-dark"
		role="alert"
	>
		<div class="d-flex justify-content-between">
			<p>{{ comment.body }}</p>

			<!-- TODO: Add delete button if user is authenticated
            <a
				href="#"
				class="btn-close delete-btn"
			></a> -->
		</div>

		<item-info :item="comment" :is_in_profile="is_in_profile" />
	</div>
</template>

<script>
import ItemInfo from "./ItemInfo.vue";

export default {
	name: "CommentList",
	components: { ItemInfo },
	props: {
		comments: { type: Array, required: true },
		is_in_profile: { type: Boolean, default: false },
	},
};
</script>
