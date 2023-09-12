/** @format */

export const adaptUsers = (users) => {
	return users.map((user) => {
		return {
			id: user.id,
			name: user.first_name,
			lastName: user.last_name,
			email: user.email,
			status: user.status,
		};
	});
};

export const adaptTeams = (teams) => {
	return teams.map((team) => {
		return {
			id: team.id,
			name: team.name,
		};
	});
};
// id: 1,
// name: "Integration #1",
// token: uuidv4(),
// status: false,
export const adaptIntegrations = (integrations) => {
	return integrations.map((integration) => {
		return {
			id: integration.id,
			name: integration.name,
			token: integration.token,
			type: integration.type,
			status: integration.status,
		};
	});
};
