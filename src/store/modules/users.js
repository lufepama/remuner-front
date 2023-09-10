/** @format */
import { usersData } from "../../data/index";
import { v4 as uuidv4 } from "uuid";

export default {
	namespaced: true,
	state: {
		users: [],
		isLoading: false,
		errorMessage: "",
		deleteComplete: false,
		addComplete: false,
	},
	getters: {
		getUsersList: (state) => state.users,
		getUserDetails: (state) => (userId) =>
			state.users.find((user) => user.id === userId),
		getDeleteCompleted: (state) => state.deleteComplete,
		getAddCompleted: (state) => state.addComplete,
		getIsLoading: (state) => state.isLoading,
	},
	actions: {
		async getUsers({ commit }) {
			// const data = await fetch("http://api.icndb.com/jokes/random/15");
			commit("updateLoading", true);
			setTimeout(() => {
				commit("updateUsers", usersData);
				commit("updateLoading", false);
			}, 1500);
		},
		async addUser({ commit }, userData) {
			commit("updateDeleteFlag", false);
			commit("addUser", userData);
			commit("updateAddFlag", true);
		},
		async deleteUser({ commit }, userData) {
			commit("updateAddFlag", false);
			commit("deleteUser", userData);
			commit("updateDeleteFlag", true);
		},
	},
	mutations: {
		updateLoading(state, value) {
			state.isLoading = value;
		},
		updateUsers(state, payload) {
			state.users = payload;
		},
		updateDeleteFlag(state, value) {
			state.deleteComplete = value;
		},
		updateAddFlag(state, value) {
			state.addComplete = value;
		},
		addUser(state, payload) {
			payload.id = uuidv4();
			state.users.push(payload);
		},
		deleteUser(state, payload) {
			state.users = state.users.filter((user) => !payload.includes(user.id));
		},
	},
};
