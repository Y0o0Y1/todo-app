const initialState = {
	loggingIn: false,
	loggedIn: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "USER_LOGIN_REQUEST":
			return { ...initialState, loggingIn: true };
		case "USER_LOGIN_SUCCESS": {
			return {
				...initialState,
				loggedIn: true,
				loggingIn: false,
				response: action.response,
				userAuthToken: action.response.token,
			};
		}
		case "USER_LOGIN_FAILURE": {
			return {
				...initialState,
				loggedIn: false,
				loggingIn: false,
				error: action.error,
			};
		}
		default:
			return state;
	}
};

export default userReducer;
