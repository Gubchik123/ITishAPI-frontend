import PostListView from "../views/blog/PostListView.vue";
import PostDetailView from "../views/blog/PostDetailView.vue";
import PostUpdateView from "../views/blog/PostUpdateView.vue";
import PostCreateView from "../views/blog/PostCreateView.vue";

import TagListView from "../views/blog/TagListView.vue";
import TagDetailView from "../views/blog/TagDetailView.vue";

export default [
    {
        path: "posts",
        name: "posts",
        component: PostListView,
    },
    {
        path: "post/:slug",
        name: "post",
        component: PostDetailView,
    },
    {
        path: "post/:slug/edit",
        name: "post-update",
        component: PostUpdateView,
        meta: { requires_auth: true }
    },
    {
        path: "post/create",
        name: "post-create",
        component: PostCreateView,
        meta: { requires_auth: true }
    },
    {
        path: "tags",
        name: "tags",
        component: TagListView,
    },
    {
        path: "tag/:slug",
        name: "tag",
        component: TagDetailView,
    }
]