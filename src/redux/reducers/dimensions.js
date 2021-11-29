let initialState = {
	width: window.innerWidth,
	height: window.innerHeight,
};

const dimensionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_WINDOW_SIZE":
			return {
				...state,
				width: action.payload.width,
				height: action.payload.height,
			};
		default:
			return state;
	}
};

export default dimensionsReducer;
