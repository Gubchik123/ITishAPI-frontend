export default {
	namespaced: true,
	state: {
		code: "404",
		name: "Page Not Found",
		description: "The page you are looking for does not exist.",
	},
	mutations: {
		SET_ERROR(state, payload) {
			state.code = payload.code;
			state.name = payload.name;
			state.description = payload.description;
		},
		SET_DEFAULT_ERROR(state) {
			state.code = "404";
			state.name = "Page Not Found";
			state.description = "The page you are looking for does not exist.";
		},
	},
	getters: {
		code(state) {
			return state.code;
		},
		name(state) {
			return state.name;
		},
		description(state) {
			return state.description;
		},
	},
};
