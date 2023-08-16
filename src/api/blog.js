import { get_json_headers, get_auth_headers } from "./api.js"

export function get_all_posts(server_url, q) {
    q = q || "";
	return fetch(`${server_url}/blog/?tab=posts&q=${q}`).then((result) =>
		result.json()
	);
}

export function get_post(server_url, slug) {
    return fetch(`${server_url}/blog/post/${slug}`).then((result) =>
        result.json()
    );
}

export function create_post({title, body, tags}, server_url) {
    return fetch(`${server_url}/blog/post`, {
        method: "POST",
        headers: {
            ...get_json_headers(), ...get_auth_headers()
        },
        body: JSON.stringify({
            title: title,
            body: body,
            tags: tags,
            user_id: localStorage.getItem("user_id"),
        }),
    }).then((result) => result.json());
}

export function delete_post(post_slug, server_url) {
    return fetch(`${server_url}/blog/post/${post_slug}`, {
        method: "DELETE",
        headers: {
            ...get_json_headers(), ...get_auth_headers()
        }
    }).then((result) => result.json());
}

export function create_like(post_id, server_url) {
    return fetch(`${server_url}/blog/like`, {
        method: "POST",
        headers: {
            ...get_json_headers(), ...get_auth_headers()
        },
        body: JSON.stringify({
            post_id: post_id,
            user_id: localStorage.getItem("user_id"),
        }),
    }).then((result) => result.json());
}

export function delete_like(post_id, server_url) {
    return fetch(`${server_url}/blog/like`, {
        method: "DELETE",
        headers: {
            ...get_json_headers(), ...get_auth_headers()
        },
        body: JSON.stringify({
            post_id: post_id,
            user_id: localStorage.getItem("user_id"),
        }),
    }).then((result) => result.json());
}

export function create_comment(comment_body, post_id, server_url) {
    return fetch(`${server_url}/blog/comment`, {
        method: "POST",
        headers: {
            ...get_json_headers(), ...get_auth_headers()
        },
        body: JSON.stringify({
            body: comment_body,
            post_id: post_id,
            user_id: localStorage.getItem("user_id"),
        }),
    }).then((result) => result.json());
}

export function delete_comment(comment_id, server_url) {
    return fetch(`${server_url}/blog/comment`, {
        method: "DELETE",
        headers: {
            ...get_json_headers(), ...get_auth_headers()
        },
        body: JSON.stringify({
            id: comment_id,
        })
    }).then((result) => result.json());
}

export function get_post_likes(server_url, slug) {
    return fetch(`${server_url}/blog/post/${slug}/likes`).then((result) =>
        result.json()
    );
}

export function get_post_comments(server_url, slug) {
    return fetch(`${server_url}/blog/post/${slug}/comments`).then((result) =>
        result.json()
    );
}

export function get_all_tags(server_url) {
	return fetch(`${server_url}/blog/?tab=tags`).then((result) =>
		result.json()
	);
}

export function get_all_tag_posts(server_url, slug) {
    return fetch(`${server_url}/blog/tag/${slug}`).then((result) =>
        result.json()
    );
}
