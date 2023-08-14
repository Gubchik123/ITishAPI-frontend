import PostListView from "../views/blog/PostListView.vue";
import PostDetailView from "../views/blog/PostDetailView.vue";
import TagListView from "../views/blog/TagListView.vue";

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
        path: "tags",
        name: "tags",
        component: TagListView,
    }
]