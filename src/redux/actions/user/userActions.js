import axios from "axios";

let baseURL = "https://api-nodejs-todolist.herokuapp.com/user";

const USER_LOG_REQUEST = "USER_LOG_REQUEST";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
const USER_LOGOUT = "USER_LOGOUT";

//Action Creator
export const userLog = (dispatch) => {
	dispatch({
		type: USER_LOG_REQUEST,
	});
};

export const userLoginSuccess = (dispatch, payload) => {
	dispatch({
		type: USER_LOGIN_SUCCESS,
		response: payload,
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

//Async functions

//Login Function
export const userLogin = (dispatch, data, navigate) => {
	userLog(dispatch);
	axios
		.post(`${baseURL}/login`, data)
		.then(function (response) {
			userLoginSuccess(dispatch, response.data);
			console.log(JSON.stringify(response.data));
			navigate("/main");
			return response;
		})
		.catch((error) => {
			console.log("catching");
			userLoginFailure(dispatch, error);
			console.log("errorrrrrrrr", error);
			return error;
		});
};

//Logout Function
export const logout = (dispatch, token, navigate) => {
	userLog(dispatch);
	axios
		.post(
			`${baseURL}/logout`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		)
		.then(function (response) {
			userLogout(dispatch);
			console.log(JSON.stringify(response.data));
			navigate("/");
			return response;
		})
		.catch((error) => {
			console.log("catching");
			console.log("error", error);
			return error;
		});
};
