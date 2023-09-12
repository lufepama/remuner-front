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

export const postUserDB = (userData) => {
	return fetch(`${API}/users`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log("err", err);
		});
};

export const deleteUserDB = (userData) => {
	return fetch(`${API}/users`, {
		method: "DELETE",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log("err", err);
		});
};
