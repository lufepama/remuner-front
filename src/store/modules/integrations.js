/** @format */
import { integrationsData } from "../../data/index";
import { v4 as uuidv4 } from "uuid";

export default {
	namespaced: true,
	state: {
		integrations: [],
		isLoading: false,
		errorMessage: "",
		deleteComplete: false,
		addComplete: false,
	},
	getters: {
		getIntegrationsList: (state) => state.integrations,
		getIntegrationsDetails: (state) => (inteId) =>
			state.integrations.value.find((inte) => inte.id === inteId),
		getDeleteCompleted: (state) => state.deleteComplete,
		getAddCompleted: (state) => state.addComplete,
		getIsLoading: (state) => state.isLoading,
	},
	actions: {
		async getIntegrations({ commit }) {
			// const data = await fetch("http://api.icndb.com/jokes/random/15");
			console.log("hols");
			commit("updateLoading", true);
			setTimeout(() => {
				commit("updateIntegrations", integrationsData);
				commit("updateLoading", false);
			}, 1500);
		},
		async addIntegrations({ commit }, payload) {
			commit("updateDeleteFlag", false);
			commit("addIntegration", payload);
			commit("updateAddFlag", true);
		},
		async deleteIntegrations({ commit }, payload) {
			commit("updateAddFlag", false);
			commit("deleteIntegrations", payload);
			commit("updateDeleteFlag", true);
		},
	},
	mutations: {
		updateIntegrations(state, payload) {
			state.integrations = payload;
		},
		addIntegration(state, payload) {
			payload.id = uuidv4();
			payload.token = uuidv4();
			state.integrations.push(payload);
		},
		deleteIntegrations(state, payload) {
			state.integrations = state.integrations.filter(
				(user) => !payload.includes(user.id)
			);
		},
		updateAddFlag(state, value) {
			state.addComplete = value;
		},
		updateDeleteFlag(state, value) {
			state.deleteComplete = value;
		},
		updateLoading(state, value) {
			state.isLoading = value;
		},
	},
};
