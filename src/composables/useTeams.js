/** @format */

import { ref, computed } from "vue";
import { useStore } from "vuex";

const useTeams = () => {
	//states
	const store = useStore();

	store.dispatch("teams/getTeams");

	const getTeamDetails = (teamId) =>
		computed(() => store.getters["teams/getTeamDetails"](teamId));

	return {
		//getters
		getTeamsList: computed(() => store.getters["teams/getTeamsList"]),
		getAddCompleted: computed(() => store.getters["teams/getAddCompleted"]),
		getDeleteCompleted: computed(
			() => store.getters["teams/getDeleteCompleted"]
		),
		getIsLoading: computed(() => store.getters["teams/getIsLoading"]),

		//actions
		getTeams: async () => await store.dispatch("teams/getTeams"),
		deleteTeams: async (teamsData) =>
			await store.dispatch("teams/deleteTeams", teamsData),
		addTeam: async (teamData) =>
			await store.dispatch("teams/addTeam", teamData),
		addUserToTeam: async (userTeamData) =>
			await store.dispatch("teams/addUserToTeam", userTeamData),
		deleteUserInTeam: async (userTeamData) =>
			await store.dispatch("teams/deleteTeams", userTeamData),

		//methods
		getTeamDetails,
	};
};

export default useTeams;
