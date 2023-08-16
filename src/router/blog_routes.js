import PostListView from "../views/blog/PostListView.vue";
import PostDetailView from "../views/blog/PostDetailView.vue";
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
        path: "post/create",
        name: "post-create",
        component: PostCreateView,
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