import axios from "axios";

let baseURL = "https://api-nodejs-todolist.herokuapp.com/user";

const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

//Action Creator
export const userLoginRequest = (dispatch) => {
	dispatch({
		type: USER_LOGIN_REQUEST,
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

export const userLogin = (dispatch, data, navigate) => {
	userLoginRequest(dispatch);
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
