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

export const userLoginSuccess = (dispatch) => {
	dispatch({
		type: USER_LOGIN_SUCCESS,
	});
};

export const userLoginFailure = (dispatch) => {
	dispatch({
		type: USER_LOGIN_FAILURE,
	});
};

export const userLogin = (dispatch, data) => {
	userLoginRequest(dispatch);
	axios
		.post(`${baseURL}/login`, data)
		.then(function (response) {
			userLoginSuccess(dispatch);
			console.log(JSON.stringify(response.data));
			return response;
		})
		.catch(function (error) {
			userLoginFailure(dispatch);
			console.log(error);
			return error;
		});
};
