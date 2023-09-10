/** @format */
import { v4 as uuidv4 } from "uuid";

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
		status: true,
	},
	{
		id: 2,
		name: "Martina",
		lastName: "Paz Mendez",
		email: "Tinita31@gmail.com",
		status: true,
	},
	{
		id: 3,
		name: "Daniela",
		lastName: "Mendez",
		email: "ella93me@gmail.com",
		status: true,
	},
];

export const userHeadersData = [
	{ key: "id", title: "ID" },
	{ key: "name", title: "Nombre" },
	{ key: "lastName", title: "Apellidos" },
	{ key: "email", title: "Email" },
	{ key: "status", title: "Estado" },
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

export const integrationsData = [
	{
		id: 1,
		name: "Integration #1",
		token: uuidv4(),
		status: false,
	},
	{
		id: 2,
		name: "Integration #2",
		token: uuidv4(),
		status: false,
	},
	{
		id: 3,
		name: "Integration #3",
		token: uuidv4(),
		status: true,
	},
	{
		id: 4,
		name: "Integration #4",
		token: uuidv4(),
		status: true,
	},
	{
		id: 2,
		name: "Integration #2",
		token: uuidv4(),
		status: false,
	},
	{
		id: 3,
		name: "Integration #3",
		token: uuidv4(),
		status: true,
	},
	{
		id: 4,
		name: "Integration #4",
		token: uuidv4(),
		status: true,
	},
	{
		id: 2,
		name: "Integration #2",
		token: uuidv4(),
		status: false,
	},
	{
		id: 3,
		name: "Integration #3",
		token: uuidv4(),
		status: true,
	},
	{
		id: 4,
		name: "Integration #4",
		token: uuidv4(),
		status: true,
	},
];

export const integrationsHeadersData = [
	{ key: "id", title: "ID" },
	{ key: "token", title: "Token" },
	{ key: "name", title: "Nombre" },
	{ key: "status", title: "Estado" },
];
