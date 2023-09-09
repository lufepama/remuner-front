/** @format */

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
	{
		path: "/overview",
		name: "overview",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/private/Overview.vue"),
	},
	{
		path: "/equipos",
		name: "teams",
		component: () =>
			import(/* webpackChunkName: "counter" */ "../views/private/Teams.vue"),
	},
	{
		path: "/users",
		name: "users",
		component: () =>
			import(/* webpackChunkName: "Users" */ "../views/private/Users.vue"),
	},
	{
		path: "/integraciones",
		name: "integrations",
		component: () =>
			import(
				/* webpackChunkName: "SearchPokemon" */ "../views/private/Integrations.vue"
			),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
