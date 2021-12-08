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
				user: action.response.user,
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
		case "USER_REGISTER_REQUEST":
			return { ...initialState, isRegistering: true };
		case "USER_REGISTER_SUCCESS":
			return { ...initialState, isRegistering: false, isRegistered: true };
		case "USER_REGISTER_FAILURE":
			return {
				...initialState,
				isRegistering: false,
				registerError: action.error,
			};
		case "USER_LOGOUT":
			return { ...initialState };
		default:
			return state;
	}
};

export default userReducer;
