const UPDATE_WINDOW_SIZE = "UPDATE_WINDOW_SIZE";

//Action creator
const updateWindowSize = (dispatch, dimensions) => {
	dispatch({ type: UPDATE_WINDOW_SIZE, payload: dimensions });
};
export { updateWindowSize };
