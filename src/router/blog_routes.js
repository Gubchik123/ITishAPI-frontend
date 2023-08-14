import PostListView from "../views/blog/PostListView.vue";
import TagListView from "../views/blog/TagListView.vue";

export default [
    {
        path: "posts",
        name: "posts",
        component: PostListView,
    },
    {
        path: "tags",
        name: "tags",
        component: TagListView,
    }
]