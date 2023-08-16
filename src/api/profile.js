import { get_json_headers, get_auth_headers } from "./api";

export function get_user_tab(username, tab, server_url) {
	return fetch(`${server_url}/user/${username}?tab=${tab}`, {
		headers: get_auth_headers(),
	}).then((result) => {
		if (result.status === 404) throw new Error("User not found");
		return result.json();
	});
}

export function update_user({username, email, password}, server_url) {
    return fetch(`${server_url}/user/me`, {
        method: "PUT",
        headers: {
            ...get_json_headers(), ...get_auth_headers(),
        },
        body: JSON.stringify({ username, email, password }),
    }).then((result) => {
        if (!result.ok) throw new Error("Error updating user");
        return result.json();
    });
}

export function update_user_avatar(avatar, username, server_url) {
    const formData = new FormData();
    formData.append("avatar", avatar);
    return fetch(`${server_url}/user/${username}/avatar`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
            ...get_auth_headers(),
        },
        body: JSON.stringify({ file: avatar }),
    }).then((result) => {
        if (!result.ok) throw new Error("Error updating avatar");
        return result.json();
    });
}

export function delete_user(server_url) {
	return fetch(`${server_url}/user/me`, {
		method: "DELETE",
		headers: get_auth_headers(),
	});
}
