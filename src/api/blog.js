export function get_all_posts(server_url, q) {
    q = q || "";
	return fetch(`${server_url}/blog/?tab=posts&q=${q}`).then((result) =>
		result.json()
	);
}

export function get_all_tags(server_url) {
	return fetch(`${server_url}/blog/?tab=tags`).then((result) =>
		result.json()
	);
}
