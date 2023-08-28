<template>
	<div class="d-flex flex-column align-items-center mt-3">
		<div class="col-md-6 col-sm-12 rounded my-form-bg-color">
			<form @submit.prevent="add_comment" class="text-white py-3 px-3">
				<!-- Comment body textarea -->
				<div class="mt-3">
					<div class="form-floating">
						<textarea
							v-model.lazy="comment_body"
							required=""
							minlength="5"
							id="comment_body"
							name="comment_body"
							class="form-control"
							placeholder="Write your comment..."
						></textarea>
						<label for="comment_body" class="text-black">
							Write your comment...
						</label>
					</div>
				</div>
				<!-- Add comment button -->
				<div class="text-center">
					<div class="mt-2">
						<button class="btn btn-success btn-lg mt-2">
							Add comment
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

import { create_comment } from "@/api/blog.js";

export default {
	name: "CommentForm",
	props: {
		post_id: { type: Number, required: true },
		user_id: { type: Number, required: true },
	},
	data() {
		return { comment_body: "" };
	},
    computed: {
        ...mapGetters("backend", ["server_url"]),
    },
	methods: {
		add_comment() {
            create_comment(
                this.comment_body,
                this.post_id,
                this.server_url
            ).then((response) => {
                this.$emit("add_comment", response);
                this.comment_body = "";
            });
        },
	},
};
</script>

<style scoped>
#comment_body {
	height: 150px;
}
</style>
