import axios from "axios";
import {
	ADD_TASK_REQUEST,
	GET_TASKS_REQUEST,
	GET_TASKS_SUCCESS,
	GET_TASKS_FAILURE,
	ADD_TASK_SUCCESS,
	ADD_TASK_FAILURE,
} from "../../types";

import { baseURL } from "./../../../config/config";

//Async functions
export const getAllTasks = (userAuthToken, dispatch) => {
	dispatch({ type: GET_TASKS_REQUEST });
	axios
		.get(`${baseURL}/task`, {
			headers: {
				Authorization: `Bearer ${userAuthToken}`,
			},
		})
		.then((response) => {
			console.log(response.data);
			dispatch({ type: GET_TASKS_SUCCESS, payload: response.data });
			return response.data.data;
		})
		.catch((error) => {
			console.log(error);
			dispatch({ type: GET_TASKS_FAILURE, error });
			return error;
		});
};

export const deleteTask = (taskID, userAuthToken, dispatch) => {
	axios
		.delete(`${baseURL}/task/${taskID}`, {
			headers: {
				Authorization: `Bearer ${userAuthToken}`,
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			console.log(response.data);
			getAllTasks(userAuthToken, dispatch);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
};

export const updateTaskState = (taskID, userAuthToken, dispatch, completed) => {
	axios
		.put(
			`${baseURL}/task/${taskID}`,
			{ completed: !completed },
			{
				headers: {
					Authorization: `Bearer ${userAuthToken}`,
					"Content-Type": "application/json",
				},
			}
		)
		.then((response) => {
			console.log(response.data);
			getAllTasks(userAuthToken, dispatch);
			return response.data;
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
};

export const addTask = (data, userAuthToken, dispatch) => {
	dispatch({ type: ADD_TASK_REQUEST });
	axios
		.post(`${baseURL}/task`, data, {
			headers: {
				Authorization: `Bearer ${userAuthToken}`,
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			dispatch({ type: ADD_TASK_SUCCESS });
			getAllTasks(userAuthToken, dispatch);
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			dispatch({ type: ADD_TASK_FAILURE });
			console.log(error);
			return error;
		});
};
