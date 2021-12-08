const initialState = {
	tasks: [],
	isEmpty: false,
	gettingNotes: false,
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_TASKS_REQUEST":
			return { ...initialState, gettingNotes: true };
		case "GET_TASKS_SUCCESS": {
			return {
				...initialState,
				gettingNotes: false,
				tasks: action.payload.data,
			};
		}
		case "GET_TASKS_FAILURE": {
			return {
				...initialState,
				gettingNotes: false,
				error: action.error,
			};
		}
		default:
			return state;
	}
};

export default tasksReducer;
