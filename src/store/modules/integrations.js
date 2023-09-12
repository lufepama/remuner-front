/** @format */
import { integrationsData } from "../../data/index";
import { v4 as uuidv4 } from "uuid";
import { getIntegrationsDB } from "../../services/integration.services";
import { adaptIntegrations } from "../../utils";

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
		getIntegrationsNumber: (state) => state.integrations.length,
	},
	actions: {
		async getIntegrations({ commit }) {
			const data = await getIntegrationsDB();
			const { success } = data;
			if (success) {
				commit("updateLoading", true);
				setTimeout(() => {
					//To make visual loading... it is no needed at all!
					commit("updateIntegrations", data.data);
					commit("updateLoading", false);
				}, 1000);
			}
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
