import axios from "axios";
let baseURL = "https://api-nodejs-todolist.herokuapp.com/task";

const GET_TASKS_REQUEST = "GET_TASKS_REQUEST";
const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
const GET_TASKS_FAILURE = "GET_TASKS_FAILURE";

const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
const ADD_TASK_FAILURE = "ADD_TASK_FAILURE";

//Action Creators
export const getTasksRequest = (dispatch) => {
	dispatch({
		type: GET_TASKS_REQUEST,
	});
};

export const getTasksSuccess = (dispatch, payload) => {
	dispatch({
		type: GET_TASKS_SUCCESS,
		payload: payload,
	});
};
export const getTasksFailure = (dispatch, error) => {
	dispatch({
		type: GET_TASKS_FAILURE,
		error: error,
	});
};

export const addTaskRequest = (dispatch) => {
	dispatch({
		type: ADD_TASK_REQUEST,
	});
};
export const addTaskSuccess = (dispatch) => {
	dispatch({
		type: ADD_TASK_SUCCESS,
	});
};

export const addTaskFailure = (dispatch, error) => {
	dispatch({
		type: ADD_TASK_FAILURE,
		error: error,
	});
};

//Async functions
export const getAllTasks = (userAuthToken, dispatch) => {
	getTasksRequest(dispatch);
	axios
		.get(baseURL, {
			headers: {
				Authorization: `Bearer ${userAuthToken}`,
			},
		})
		.then((response) => {
			console.log(response.data);
			getTasksSuccess(dispatch, response.data);
			return response.data.data;
		})
		.catch((error) => {
			console.log(error);
			getTasksFailure(dispatch, error);
			return error;
		});
};

export const deleteTask = (taskID, userAuthToken, dispatch) => {
	axios
		.delete(`${baseURL}/${taskID}`, {
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
			`${baseURL}/${taskID}`,
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
	addTaskRequest(dispatch);
	axios
		.post(baseURL, data, {
			headers: {
				Authorization: `Bearer ${userAuthToken}`,
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			addTaskSuccess(dispatch);
			getAllTasks(userAuthToken, dispatch);
			console.log(response.data);
			return response.data;
		})
		.catch((error) => {
			addTaskFailure(dispatch);
			console.log(error);
			return error;
		});
};
