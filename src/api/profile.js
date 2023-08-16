import { get_auth_headers } from "./api";

export function get_user_tab(username, tab, server_url) {
	return fetch(`${server_url}/user/${username}?tab=${tab}`, {
		headers: get_auth_headers(),
	}).then((result) => {
		if (result.status === 404) throw new Error("User not found");
		return result.json();
	});
}
