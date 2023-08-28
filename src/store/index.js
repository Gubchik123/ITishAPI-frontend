import Vuex from "vuex";

import backend from "./modules/backend";
import error from "./modules/error";

const store = new Vuex.Store({
	modules: {
		backend: backend,
		error: error,
	},
});

export default store;
