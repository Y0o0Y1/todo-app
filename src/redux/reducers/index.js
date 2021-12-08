import { combineReducers } from "redux";
import userReducer from "./userReducer";
import tasksReducer from "./tasksReducer";
const allReducers = combineReducers({
	userReducer,
	tasksReducer,
});
export default allReducers;
