/** @format */

import { ref, computed } from "vue";
import { useStore } from "vuex";
import { postIntegrationDB } from "../services/integration.services";

const useIntegrations = () => {
	//states
	const store = useStore();

	// store.dispatch("getintegrations");
	store.dispatch("integrations/getIntegrations");

	const getAlertText = () => {
		const getDeleteCompleted = computed(
			() => store.getters["integrations/getDeleteCompleted"]
		);
		const getAddCompleted = computed(
			() => store.getters["integrations/getAddCompleted"]
		);
		if (getDeleteCompleted.value) {
			return "Has eliminado un recurso de integraciones correctamente";
		} else if (getAddCompleted.value) {
			return "Has añadido un recurso de integraciones correctamente";
		}
	};

	const getUserDetails = (inteId) =>
		computed(() =>
			store.getters["integrations/getIntegrationsDetails"](inteId)
		);

	const handleCreateIntegration = async (integrationData) => {
		const resp = await postIntegrationDB(integrationData);
		const { success } = resp;
		if (success) return resp.data;
	};

	return {
		//getters
		getIntegrationsList: computed(
			() => store.getters["integrations/getIntegrationsList"]
		),
		getAddCompleted: computed(
			() => store.getters["integrations/getAddCompleted"]
		),
		getDeleteCompleted: computed(
			() => store.getters["integrations/getDeleteCompleted"]
		),
		getIsLoading: computed(() => store.getters["integrations/getIsLoading"]),
		getIntegrationsNumber: computed(
			() => store.getters["integrations/getIntegrationsNumber"]
		),

		//actions
		addIntegrations: async (userData) =>
			await store.dispatch("integrations/addIntegrations", userData),
		deleteIntegrations: async (userData) =>
			await store.dispatch("integrations/deleteIntegrations", userData),
		// getintegrations: async () => await store.dispatch("integrations/getintegrations"),
		//methods
		getUserDetails,
		getAlertText,
		handleCreateIntegration,
	};
};

export default useIntegrations;
