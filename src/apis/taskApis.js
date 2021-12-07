import axios from "axios";

let baseURL = "https://api-nodejs-todolist.herokuapp.com/task";

const getTasks = (userAuthToken) => {
	axios
		.get(
			baseURL,
			{},
			{
				headers: {
					Authorization: `Bearer ${userAuthToken}`,
				},
			}
		)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
};

const addTask = (data, userAuthToken) => {
	axios
		.post(baseURL, data, {
			headers: {
				Authorization: `Bearer ${userAuthToken}`,
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
};
const deleteTask = (taskID, userAuthToken) => {
	axios
		.post(
			`${baseURL}/${taskID}`,
			{},
			{
				headers: {
					Authorization: `Bearer ${userAuthToken}`,
					"Content-Type": "application/json",
				},
			}
		)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
};

const updateTaskState = (data, userAuthToken) => {
	axios
		.put(baseURL, data, {
			headers: {
				Authorization: `Bearer ${userAuthToken}`,
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
};
