/** @format */

import { ref } from "vue";
import { teamsData } from "../data";
import { v4 as uuidv4 } from "uuid";

const useTeams = () => {
	//states
	const teams = ref();
	const isLoading = ref(false);
	const errorMessage = ref("");
	const deleteComplete = ref(false);
	const addComplete = ref(false);

	const addTeam = (name) => {
		const newTeam = {
			id: uuidv4,
			name,
			users: [],
		};
		teams.value = newTeam;
		deleteComplete.value = false;
		addComplete.value = true;
	};

	const deleteTeam = (teamsArray) => {
		addComplete.value = false;
		teams.value = teams.value.filter((user) => !teamsArray.includes(user.id));
		deleteComplete.value = true;
	};

	const addUserToTeam = ({ teamId, user }) => {
		const team = teams.value.filter((team) => team.id === teamId);
		team.users.push(user);
	};

	const deleteUserInTeam = ({ teamId, userId }) => {
		const team = teams.value.find((team) => team.id === teamId);
		if (team) {
			team.users = team.users.filter((user) => user !== userId);
		}
	};

	const getTeams = async () => {
		isLoading.value = true;
		setTimeout(() => {
			teams.value = teamsData;
			isLoading.value = false;
		}, 1000);
	};

	getTeams();
	return {
		//refs
		isLoading,
		teams,
		errorMessage,
		deleteComplete,
		addComplete,
		//methods
		addTeam,
		deleteTeam,
		addUserToTeam,
		deleteUserInTeam,
	};
};

export default useTeams;
