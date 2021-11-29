import { combineReducers } from "redux";
import dimensionsReducer from "./dimensions";
const allReducers = combineReducers({
	dimensionsReducer: dimensionsReducer,
});
export default allReducers;
