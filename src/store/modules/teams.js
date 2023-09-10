/** @format */
import { teamsData } from "../../data/index";
import { v4 as uuidv4 } from "uuid";

export default {
	namespaced: true,
	state: {
		teams: [],
		isLoading: false,
		errorMessage: "",
		deleteComplete: false,
		addComplete: false,
	},
	getters: {
		getTeamsList: (state) => state.teams,
		getTeamDetails: (state) => (teamId) =>
			state.teams.find((team) => team.id === teamId),
		getDeleteCompleted: (state) => state.deleteComplete,
		getAddCompleted: (state) => state.addComplete,
		getIsLoading: (state) => state.isLoading,
		getTeamsNumber: (state) => state.teams.length,
	},
	actions: {
		async getTeams({ commit }) {
			// const data = await fetch("http://api.icndb.com/jokes/random/15");
			commit("updateLoading", true);
			setTimeout(() => {
				commit("updateTeams", teamsData);
				commit("updateLoading", false);
			}, 1500);
		},
		async deleteTeams({ commit }, teamsData) {
			commit("updateAddFlag", false);
			commit("deleteTeams", teamsData);
			commit("updateDeleteFlag", true);
		},
		async addTeam({ commit }, teamName) {
			commit("updateDeleteFlag", false);
			commit("addTeam", teamName);
			commit("updateAddFlag", true);
		},
		async addUserToTeam({ commit }, payload) {
			commit("updateDeleteFlag", false);
			commit("addUserToTeam", payload);
			commit("updateAddFlag", true);
		},
		async deleteUserInTeam({ commit }, payload) {
			commit("updateDeleteFlag", false);
			commit("deleteUserInTeam", payload);
			commit("updateAddFlag", true);
		},
	},
	mutations: {
		updateLoading(state, value) {
			state.isLoading = value;
		},
		updateTeams(state, payload) {
			state.teams = payload;
		},
		updateDeleteFlag(state, value) {
			state.deleteComplete = value;
		},
		updateAddFlag(state, value) {
			state.addComplete = value;
		},
		addTeam(state, name) {
			const newTeam = {
				id: uuidv4(),
				name,
				users: [],
			};
			state.teams.push(newTeam);
		},
		deleteTeams(state, payload) {
			state.teams = state.teams.filter((team) => !payload.includes(team.id));
		},
		addUserToTeam(state, { userData, teamId }) {
			const team = state.teams.find((team) => team.id === teamId);
			if (team) {
				team.users.push(userData);
			}
		},
		deleteUserInTeam(state, { userId, teamId }) {
			const team = state.teams.value.find((team) => team.id === teamId);
			if (team) {
				team.users = team.users.filter((user) => user !== userId);
			}
		},
	},
};
