import { combineReducers } from "redux";
import universitiesReducer from "./universitiesReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  universities: universitiesReducer,
  error: errorReducer
});
