import { get_json_and_auth_headers } from "./api.js";

function _fetch_and_get_json(method, url, data) {
	return fetch(url, {
		method: method,
		headers: get_json_and_auth_headers(),
		body: JSON.stringify(data),
	});
}

export function get_all_posts(server_url, q) {
	return _fetch_and_get_json_by_url(
		`${server_url}/blog/?tab=posts&q=${q || ""}`
	);
}

export function get_post(server_url, slug) {
	return _fetch_and_get_json_by_url(`${server_url}/blog/post/${slug}`);
}

export function create_post({ title, body, tags }, server_url) {
	return _process_post("POST", `${server_url}/blog/post`, {
		title,
		body,
		tags,
	});
}

export function update_post({ title, slug, body, tags }, server_url) {
	return _process_post("PUT", `${server_url}/blog/post/${slug}`, {
		title,
		body,
		tags,
	});
}

function _process_post(method, url, post) {
	return _fetch_and_get_json(method, url, {
		...post,
		user_id: localStorage.getItem("user_id"),
	});
}

export function delete_post(post_slug, server_url) {
	return fetch(`${server_url}/blog/post/${post_slug}`, {
		method: "DELETE",
		headers: get_json_and_auth_headers(),
	}).then((result) => result.json());
}

export function create_like(post_id, server_url) {
	return _process_like("POST", `${server_url}/blog/like`, post_id);
}

export function delete_like(post_id, server_url) {
	return _process_like("DELETE", `${server_url}/blog/like`, post_id);
}

function _process_like(method, url, post_id) {
	return _fetch_and_get_json(method, url, {
		post_id: post_id,
		user_id: localStorage.getItem("user_id"),
	});
}

export function create_comment(comment_body, post_id, server_url) {
	return _process_comment("POST", `${server_url}/blog/comment`, {
		body: comment_body,
		post_id: post_id,
		user_id: localStorage.getItem("user_id"),
	});
}

export function delete_comment(comment_id, server_url) {
	return _process_comment("DELETE", `${server_url}/blog/comment`, {
		id: comment_id,
	});
}

export function get_post_likes(server_url, slug) {
	return _fetch_and_get_json_by_url(`${server_url}/blog/post/${slug}/likes`);
}

export function get_post_comments(server_url, slug) {
	return _fetch_and_get_json_by_url(
		`${server_url}/blog/post/${slug}/comments`
	);
}

export function get_all_tags(server_url) {
	return _fetch_and_get_json_by_url(`${server_url}/blog/?tab=tags`);
}

export function get_all_tag_posts(server_url, slug) {
	return _fetch_and_get_json_by_url(`${server_url}/blog/tag/${slug}`);
}

function _fetch_and_get_json_by_url(url) {
	return fetch(url).then((result) => result.json());
}
