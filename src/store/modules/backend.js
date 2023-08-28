export default {
    namespaced: true,
	state: {
		backend_url: "http://127.0.0.1:8000/api",
	},
	getters: {
		server_url: (state) => {
			return state.backend_url;
		},
	},
};
