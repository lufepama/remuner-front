/** @format */

import { createStore } from "vuex";
import users from "./modules/users";
import teams from "./modules/teams";

export default createStore({
	modules: {
		users,
		teams,
	},
});
