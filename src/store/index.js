import Vuex from "vuex";
// import Vue from "vue";

import error from "./error";

// Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		error: error,
	},
});

export default store;
