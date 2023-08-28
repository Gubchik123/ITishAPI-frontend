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
