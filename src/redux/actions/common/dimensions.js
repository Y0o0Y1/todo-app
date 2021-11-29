const UPDATE_WINDOW_SIZE = "UPDATE_WINDOW_SIZE";

//Action creator
const updateWindowSize = (dispatch, dimensions) => {
	console.log(dimensions);
	dispatch({ type: UPDATE_WINDOW_SIZE, payload: dimensions });
};
export { updateWindowSize };
