import { combineReducers } from "redux";
import filter from "./filter";
import houses from "./houses";

export default combineReducers({
  filter,
  houses,
});
