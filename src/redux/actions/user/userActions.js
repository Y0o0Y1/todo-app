import { userLogin } from "../../../apis/userApis";

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

export const logIn = (dispatch, data) => {
	userLoginRequest(dispatch);
	userLogin(data);
};
