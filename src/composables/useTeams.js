/** @format */

import { ref, computed } from "vue";
import { useStore } from "vuex";
import {
	postTeamDB,
	deleteTeamDB,
	getTeamUsersDB,
	postUserToTeamDB,
} from "../services/team.services";
import { adaptProxyArray, adaptUsers, adaptUserTeamData } from "../utils";

const useTeams = () => {
	//states
	const store = useStore();

	store.dispatch("teams/getTeams");

	const getTeamDetails = (teamId) =>
		computed(() => store.getters["teams/getTeamDetails"](teamId));

	const getAlertText = () => {
		const getDeleteCompleted = computed(
			() => store.getters["teams/getDeleteCompleted"]
		);
		const getAddCompleted = computed(
			() => store.getters["teams/getAddCompleted"]
		);
		if (getDeleteCompleted.value) {
			return "Has eliminado de equipo un recurso correctamente";
		} else if (getAddCompleted.value) {
			return "Has añadido de equipo un recurso correctamente";
		}
	};

	const formattedUsers = (users) => {
		return users.map((user) => ({
			text: `${user.name} ${user.lastName}`,
			id: user.id,
		}));
	};

	const handleCreateTeam = async (name) => {
		const resp = await postTeamDB({ name });
		const { success } = resp;
		if (success) return resp.data;
	};

	const handleDeleteTeams = async (teams) => {
		const data = adaptProxyArray(teams, "team_ids");
		await deleteTeamDB(data);
	};

	const handleGetTeamUsers = async (teamId) => {
		const resp = await getTeamUsersDB(teamId);
		const { success } = resp;
		if (success) return adaptUsers(resp.data);
	};

	const addUserToTeam = async (userId, teamId) => {
		const data = adaptUserTeamData(userId, teamId);
		const resp = await postUserToTeamDB(data);
		const { success } = resp;
		if (success) return resp.data;
	};

	return {
		//getters
		getTeamsList: computed(() => store.getters["teams/getTeamsList"]),
		getAddCompleted: computed(() => store.getters["teams/getAddCompleted"]),
		getDeleteCompleted: computed(
			() => store.getters["teams/getDeleteCompleted"]
		),
		getIsLoading: computed(() => store.getters["teams/getIsLoading"]),
		getTeamsNumber: computed(() => store.getters["teams/getTeamsNumber"]),

		//actions
		getTeams: async () => await store.dispatch("teams/getTeams"),
		deleteTeams: async (teamsData) =>
			await store.dispatch("teams/deleteTeams", teamsData),
		addTeam: async (teamData) =>
			await store.dispatch("teams/addTeam", teamData),
		deleteUserInTeam: async (userTeamData) =>
			await store.dispatch("teams/deleteTeams", userTeamData),

		//methods
		getTeamDetails,
		getAlertText,
		formattedUsers,
		handleCreateTeam,
		handleDeleteTeams,
		handleGetTeamUsers,
		addUserToTeam,
	};
};

export default useTeams;
