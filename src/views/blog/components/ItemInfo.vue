<template>
	<div class="item_info d-flex justify-content-between">
		<div v-if="is_in_profile" class="item_author me-3">
			<b>For post:</b> &nbsp;
			<router-link
				:to="{ name: 'post', params: { slug: item.post.slug } }"
				class="text-decoration-underline"
			>
				{{ item.post.title }}
			</router-link>
		</div>
		<div v-else class="item_author me-3">
			<b>Author:</b> &nbsp;
			<router-link
				:to="'/user/' + item.user.username"
				class="text-decoration-underline"
			>
				{{ item.user.username }}
			</router-link>
		</div>
		<div class="item_created">
			<b>Created:</b> &nbsp;
			{{ format_date(item.created) }}
		</div>
	</div>
</template>

<script>
export default {
    name: "ItemInfo",
    props: {
        item: { type: Object, required: true },
        is_in_profile: { type: Boolean, default: false }
    },
    methods: {
        format_date(input_date) {
            const date = new Date(input_date);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();

            return `${day}.${month}.${year}`;
        }
    }
};
</script>
