/** @format */

import { API } from "../../backend";

export const getIntegrationsDB = () => {
	return fetch(`${API}/integrations`, {
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
