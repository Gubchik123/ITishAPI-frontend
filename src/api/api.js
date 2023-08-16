export function get_json_headers() {
	return {
		Accept: "application/json",
		"Content-Type": "application/json",
	};
}

export function get_auth_headers() {
	return {
		Authorization: `Bearer ${localStorage.getItem("access_token")}`,
	};
}
