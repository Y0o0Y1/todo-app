import axios from "axios";
import {
	USER_LOG_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE,
} from "../../types";

import { baseURL } from "./../../../config/config";

//Async functions

//Login Function
export const userLogin = (dispatch, data, navigate) => {
	dispatch({ type: USER_LOG_REQUEST });
	axios
		.post(`${baseURL}/user/login`, data)
		.then(function (response) {
			dispatch({ type: USER_LOGIN_SUCCESS, response: response.data });
			console.log(JSON.stringify(response.data));
			navigate("/main");
			return response;
		})
		.catch((error) => {
			dispatch({ type: USER_LOGIN_FAILURE, error: error });
			return error;
		});
};

//Logout Function
export const logout = (dispatch, token, navigate) => {
	dispatch({ type: USER_LOG_REQUEST });
	axios
		.post(
			`${baseURL}/user/logout`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		)
		.then(function (response) {
			dispatch({ type: USER_LOGOUT });
			navigate("/");
			return response;
		})
		.catch((error) => {
			console.log("catching");
			console.log("error", error);
			return error;
		});
};
//Registeration Function

// USER_LOG_REQUEST,
// USER_LOGIN_SUCCESS,
// USER_LOGIN_FAILURE,
// USER_LOGOUT,
// USER_REGISTER_REQUEST,
// USER_REGISTER_SUCCESS,
// USER_REGISTER_FAILURE,

export const userRegister = (data, dispatch, navigate) => {
	dispatch({ type: USER_REGISTER_REQUEST });
	axios
		.post(`${baseURL}/register`, data)
		.then(function (response) {
			dispatch({ type: USER_REGISTER_SUCCESS });
			navigate("/");
			console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
			dispatch({ type: USER_REGISTER_FAILURE, error: error.message });
			console.log(error);
		});
};
