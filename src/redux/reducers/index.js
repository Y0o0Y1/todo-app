import { combineReducers } from "redux";
import dimensionsReducer from "./dimensions";
import userReducer from "./userReducer";
const allReducers = combineReducers({
	dimensionsReducer: dimensionsReducer,
	userReducer,
});
export default allReducers;
