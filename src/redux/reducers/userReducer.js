const initialState = {
	logging: false,
	loggedIn: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "USER_LOG_REQUEST":
			return { ...initialState, logging: true };
		case "USER_LOGIN_SUCCESS": {
			return {
				...initialState,
				loggedIn: true,
				logging: false,
				response: action.response,
				userAuthToken: action.response.token,
			};
		}
		case "USER_LOGIN_FAILURE": {
			return {
				...initialState,
				loggedIn: false,
				logging: false,
				error: action.error,
			};
		}
		case "USER_LOGOUT":
			return { ...initialState };
		default:
			return state;
	}
};

export default userReducer;
