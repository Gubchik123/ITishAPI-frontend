export function login(email, password, server_url) {
	return fetch(`${server_url}/auth/login`, {
		method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
		body: _get_form_data({
			username: email,
			password: password,
		}),
	}).then((response) => {
		if (response.status !== 200) throw new Error();
		return response.json();
	});
}

export function signup(username, email, password, server_url) {
	return fetch(`${server_url}/auth/signup`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: username,
			email: email,
			password: password,
		}),
	}).then((response) => {
		if (response.status !== 200) throw new Error();
		return response.json();
	});
}

function _get_form_data(data) {
    const form_data = new URLSearchParams();
    for (const [key, value] of Object.entries(data)) {
        form_data.append(key, value);
    }
    return form_data;
}
