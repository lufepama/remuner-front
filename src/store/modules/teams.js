/** @format */
// import { teamsData } from "../../data/index"; <-- Used during development
import { v4 as uuidv4 } from "uuid";
import { getTeamsDB } from "../../services/team.services";
import { adaptTeams } from "../../utils";

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
			const data = await getTeamsDB();
			const { success } = data;
			if (success) {
				commit("updateLoading", true);
				setTimeout(() => {
					//To make visual loading... it is no needed at all!
					commit("updateTeams", data.data);
					commit("updateLoading", false);
				}, 1000);
			}
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
		addTeam(state, teamData) {
			const newTeam = {
				id: teamData.id,
				name: teamData.name,
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
