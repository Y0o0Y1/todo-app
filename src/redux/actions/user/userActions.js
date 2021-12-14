import axios from "axios";
import {
	USER_LOG_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGOUT,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE,
} from "./userTypes";

let baseURL = "https://api-nodejs-todolist.herokuapp.com/user";
//Action Creator
export const userLog = (dispatch) => {
	dispatch({
		type: USER_LOG_REQUEST,
	});
};

export const userLoginSuccess = (dispatch, response) => {
	dispatch({
		type: USER_LOGIN_SUCCESS,
		response: response,
	});
};

export const userLoginFailure = (dispatch, error) => {
	dispatch({
		type: USER_LOGIN_FAILURE,
		error: error,
	});
};
export const userLogout = (dispatch) => {
	dispatch({
		type: USER_LOGOUT,
	});
};

export const userRegisterRequest = (dispatch) => {
	dispatch({
		type: USER_REGISTER_REQUEST,
	});
};

export const userRegisterSuccess = (dispatch) => {
	dispatch({
		type: USER_REGISTER_SUCCESS,
	});
};
export const userRegisterFailure = (dispatch, error) => {
	dispatch({
		type: USER_REGISTER_FAILURE,
		error: error,
	});
};

//Async functions

//Login Function
export const userLogin = (dispatch, data, navigate) => {
	dispatch({ type: USER_LOG_REQUEST });
	axios
		.post(`${baseURL}/login`, data)
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
			`${baseURL}/logout`,
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
