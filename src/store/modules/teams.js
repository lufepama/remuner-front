/** @format */

export default {
	namespaced: true,
	state: {
		teams: {},
		isLoading: false,
		errorMessage: "",
		deleteComplete: false,
		addComplete: false,
	},
	getters: {},
	actions: {
		async getData({ commit }) {
			const data = await fetch("http://api.icndb.com/jokes/random/15");
			commit("SET_DATA", await data.json());
		},
	},
	mutations: {},
};
