<template>
	<ProfileLayout title="overview" :username="$route.params.username || 'me'">
        <h4>User comments</h4>

        <template v-if="user_response === null">
			<comment-placeholder :key="index" v-for="index in 5" />
		</template>
		<Alert
            v-else-if="user_response.length === 0"
            category="primary"
            message="There are not any comments yet"
        />
		<comment-list
            v-else
            @delete_comment="delete_comment"
            :comments="user_response"
            :current_user_id="current_user_id()"
            :is_in_profile="true"
        />
	</ProfileLayout>
</template>

<script>
import UserMixin from "@/mixins/UserMixin";
import Alert from "@/components/Alert.vue";
import CommentList from "@/views/blog/components/CommentList.vue";
import CommentPlaceholder from "@/views/blog/components/CommentPlaceholder.vue";

import ProfileLayout from '@/layouts/ProfileLayout.vue'
import ProfileMixin from "@/mixins/ProfileMixin";

export default {
    name: "UserCommentsView",
    mixins: [UserMixin, ProfileMixin],
    components: {
        ProfileLayout, Alert, CommentList, CommentPlaceholder
    },
	computed: {
        tab() { return "comments" }
	},
    methods: {
        delete_comment(comment_id) {
			this.user_response = this.user_response.filter(
				(comment) => comment.id !== comment_id
			);
		},
    }
}
</script>
