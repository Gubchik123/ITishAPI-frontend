<template>
	<ProfileLayout title="overview" :username="$route.params.username || 'me'">
        <h4>User liked posts</h4>
        <template v-if="user_response === null">
			<post-placeholder :key="index" v-for="index in 5" />
		</template>
		<template v-else-if="Array.isArray(user_response) && user_response.length === 0">
			<Alert category="primary" message="There are no liked posts yet" />
		</template>
		<template v-else>
			<Post
                @delete_post="delete_post"
				:key="like.id"
				v-for="like in user_response"
				:post="like.post"
				:current_user_id="current_user_id()"
                :is_in_profile="true"
			/>
		</template>
	</ProfileLayout>
</template>

<script>
import UserMixin from '@/mixins/UserMixin';
import Alert from "@/components/Alert.vue";
import Post from "@/views/blog/components/Post.vue";
import PostPlaceholder from "@/views/blog/components/PostPlaceholder.vue";

import ProfileLayout from '../../layouts/ProfileLayout.vue'
import ProfileMixin from "./mixins/ProfileMixin";

export default {
    name: "UserLikesView",
    mixins: [UserMixin, ProfileMixin],
    components: {
        ProfileLayout, Alert, Post, PostPlaceholder
    },
    data() {
        return { user: null }
    },
	computed: {
        tab() { return "likes" }
	},
    methods: {
        delete_post(post_id) {
            this.user_response = this.user_response.filter(like => like.post.id !== post_id);
        }
    }
}
</script>
