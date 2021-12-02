const initialState = {
	loggingIn: false,
	loggedIn: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "USER_LOGIN_REQUEST":
			return { ...initialState, loggingIn: true };
		case "USER_LOGIN_SUCCESS": {
			return { ...initialState, loggedIn: true, loggingIn: false };
		}
		case "USER_LOGIN_FAILURE": {
			return { ...initialState, loggedIn: false, loggingIn: false };
		}
		default:
			return state;
	}
};

export default userReducer;
