/** @format */
import { usersData } from "../../data/index";
import { v4 as uuidv4 } from "uuid";
import { getUsersDB } from "../../services/user.services";
import { adaptUsers } from "../../utils";

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
		getUsersNumber: (state) => state.users.length,
	},
	actions: {
		async getUsers({ commit }) {
			const data = await getUsersDB();
			const { success } = data;
			if (success) {
				commit("updateLoading", true);
				const users = adaptUsers(data.data);
				setTimeout(() => {
					//To make visual loading... it is no needed at all!
					commit("updateLoading", false);
					commit("updateUsers", users);
				}, 1000);
			}
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
		updateUsers(state, payload) {
			state.users = payload;
		},
		addUser(state, payload) {
			payload.id = uuidv4();
			state.users.push(payload);
		},
		deleteUser(state, payload) {
			state.users = state.users.filter((user) => !payload.includes(user.id));
		},
		updateLoading(state, value) {
			state.isLoading = value;
		},
		updateDeleteFlag(state, value) {
			state.deleteComplete = value;
		},
		updateAddFlag(state, value) {
			state.addComplete = value;
		},
	},
};
