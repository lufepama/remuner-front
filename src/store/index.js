/** @format */

import { createStore } from "vuex";
import users from "./modules/users";
import teams from "./modules/teams";
import integrations from "./modules/integrations";

export default createStore({
	modules: {
		users,
		teams,
		integrations,
	},
});
