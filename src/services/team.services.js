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
