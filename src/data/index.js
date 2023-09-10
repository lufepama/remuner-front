/** @format */

export const menuItems = [
	{
		id: 1,
		title: "Overview",
		name: "overview",
		route: "/overview",
	},
	{
		id: 2,
		title: "Usuarios",
		name: "users",
		route: "/usuarios",
	},
	{
		id: 3,
		title: "Equipos",
		name: "teams",
		route: "/equipos",
	},
	{
		id: 4,
		title: "Integraciones",
		name: "integrations",
		route: "/integraciones",
	},
];

export const cardMenuItems = [
	{
		id: 1,
		title: "Config",
		icon: "conf-icon",
	},
	{
		id: 2,
		title: "Editar",
		icon: "edit-icon",
	},
];

export const detailedCardDescription = [
	{
		id: 1,
		title: "Consigna",
		points: [
			{
				id: 1,
				title:
					"Replicar este dashboard respetando estilos y colores definidos en Figma.",
			},
			{
				id: 2,
				title:
					"Agregar vistas para manejo de usuarios, equipos e integraciones, linkeables desde el panel de navegación.",
			},
			{
				id: 3,
				title:
					"Realizar un backend para el CRUD de los datos de usuarios, equipos e integraciones implementando los modelos descriptos abajo.",
			},
		],
	},
	{
		id: 1,
		title: "Requerimientos",
		points: [
			{
				id: 1,
				title:
					"Para el frontend utilizar el framework Vue.js con librería de componentes Vuetify.",
			},
			{
				id: 2,
				title: "Para el backend utilizar el framework Fastapi.",
			},
			{
				id: 3,
				title: "Entrega del código de frontend y backend en un zip.",
			},
		],
	},
];

export const undetailedCardDescription = [
	{
		id: 1,
		title: "USER",
		description:
			"{ id: Integer, firstName: String, lastName: String, email: String, status: Boolean }",
	},
	{
		id: 2,
		title: "TEAM",
		description: "{ id: Integer, name: String, users: Array }",
	},
	{
		id: 3,
		title: "INTEGRATIONS",
		description:
			"{ id: Integer, name: String, type: String, token: String, status: Boolean }",
	},
];

export const usersData = [
	{
		id: 1,
		name: "Felipe",
		lastName: "Paz Martinez",
		email: "lufepama31@gmail.com",
	},
	{
		id: 2,
		name: "Martina",
		lastName: "Paz Mendez",
		email: "Tinita31@gmail.com",
	},
	{
		id: 3,
		name: "Daniela",
		lastName: "Mendez",
		email: "ella93me@gmail.com",
	},
];

export const userHeadersData = [
	{ key: "id", title: "ID" },
	{ key: "name", title: "Nombre" },
	{ key: "lastName", title: "Apellidos" },
	{ key: "email", title: "Email" },
];

export const teamHeadersData = [
	{ key: "id", title: "ID" },
	{ key: "name", title: "Nombre" },
];

export const teamsData = [
	{
		id: 1,
		name: "Team #1",
		users: [
			{
				id: 1,
				name: "Felipe",
				lastName: "Paz Martinez",
				email: "lufepama31@gmail.com",
			},
			{
				id: 2,
				name: "Martina",
				lastName: "Paz Mendez",
				email: "Tinita31@gmail.com",
			},
		],
	},
	{
		id: 2,
		name: "Team #2",
		users: [
			{
				id: 1,
				name: "Felipe",
				lastName: "Paz Martinez",
				email: "lufepama31@gmail.com",
			},
		],
	},
];
