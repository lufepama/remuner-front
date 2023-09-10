/** @format */

import { ref, computed } from "vue";
import { useStore } from "vuex";

const useUsers = () => {
	//states
	const store = useStore();

	// store.dispatch("getUsers");
	store.dispatch("users/getUsers");

	const getAlertText = () => {
		const getDeleteCompleted = computed(
			() => store.getters["users/getDeleteCompleted"]
		);
		const getAddCompleted = computed(
			() => store.getters["users/getAddCompleted"]
		);
		if (getDeleteCompleted.value) {
			return "Has añadido un recurso de usuarios correctamente";
		} else if (getAddCompleted.value) {
			return "Has eliminado un recurso de usuarios correctamente";
		}
	};

	const getUserDetails = (userId) =>
		computed(() => store.getters["users/getUserDetails"](userId));

	return {
		//getters
		getUsersList: computed(() => store.getters["users/getUsersList"]),
		getAddCompleted: computed(() => store.getters["users/getAddCompleted"]),
		getDeleteCompleted: computed(
			() => store.getters["users/getDeleteCompleted"]
		),
		getIsLoading: computed(() => store.getters["users/getIsLoading"]),
		getUsersNumber: computed(() => store.getters["users/getUsersNumber"]),
		//actions
		addUser: async (userData) =>
			await store.dispatch("users/addUser", userData),
		deleteUser: async (userData) =>
			await store.dispatch("users/deleteUser", userData),
		// getUsers: async () => await store.dispatch("users/getUsers"),
		//methods
		getUserDetails,
		getAlertText,
	};
};

export default useUsers;
