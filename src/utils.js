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

export const adaptUserToSave = (userData) => {
	return {
		first_name: userData.name,
		last_name: userData.lastName,
		email: userData.email,
		status: userData.status,
	};
};

/////
export const adaptProxyArray = (data, keyName) => {
	const arrayIds = data.map((el) => el);
	const addaptedData = {};
	addaptedData[keyName] = arrayIds;
	return addaptedData;
};
