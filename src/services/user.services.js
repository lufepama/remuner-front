/** @format */

import { API } from "../../backend";

export const getUsersDB = () => {
	return fetch(`${API}/users`, {
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
