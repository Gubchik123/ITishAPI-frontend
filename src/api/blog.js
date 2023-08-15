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
