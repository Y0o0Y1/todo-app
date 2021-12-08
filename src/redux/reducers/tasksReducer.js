const initialState = {
	tasks: [],
	isEmpty: false,
	gettingTasks: false,
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_TASKS_REQUEST":
			return { ...initialState, gettingTasks: true };
		case "GET_TASKS_SUCCESS": {
			return {
				...initialState,
				gettingTasks: false,
				tasks: action.payload.data,
			};
		}
		case "GET_TASKS_FAILURE": {
			return {
				...initialState,
				gettingTasks: false,
				error: action.error,
			};
		}
		default:
			return state;
	}
};

export default tasksReducer;
