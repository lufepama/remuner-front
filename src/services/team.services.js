/** @format */

import { API } from "../../backend";

export const getTeamsDB = () => {
	return fetch(`${API}/teams`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log("err", err);
		});
};

export const postTeamDB = (teamData) => {
	return fetch(`${API}/teams`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(teamData),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log("err", err);
		});
};

export const deleteTeamDB = (teamData) => {
	return fetch(`${API}/teams`, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(teamData),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log("err", teamData);
		});
};

export const getTeamUsersDB = (teamId) => {
	return fetch(`${API}/teams/${teamId}/user-list`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log("err", err);
		});
};

export const postUserToTeamDB = (teamData) => {
	return fetch(`${API}/teams/add-user`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(teamData),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log("err", err);
		});
};
