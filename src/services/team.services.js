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
