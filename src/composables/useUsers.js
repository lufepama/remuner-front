/** @format */

import { ref } from "vue";
import { usersData } from "../data";
import { v4 as uuidv4 } from "uuid";

const useUsers = () => {
	//states
	const users = ref();
	const isLoading = ref(false);
	const errorMessage = ref("");
	const deleteComplete = ref(false);
	const addComplete = ref(false);

	const addUser = (userData) => {
		console.log("carenalga");
		deleteComplete.value = false;
		userData.id = uuidv4();
		users.value.push(userData);
		addComplete.value = true;
	};

	const deleteUser = (array) => {
		addComplete.value = false;
		users.value = users.value.filter((user) => !array.includes(user.id));
		deleteComplete.value = true;
	};

	const getUsers = async () => {
		isLoading.value = true;
		setTimeout(() => {
			users.value = usersData;
			isLoading.value = false;
		}, 1000);
	};

	getUsers();
	return {
		//refs
		isLoading,
		users,
		errorMessage,
		deleteComplete,
		addComplete,
		//methods
		addUser,
		deleteUser,
	};
};

export default useUsers;
