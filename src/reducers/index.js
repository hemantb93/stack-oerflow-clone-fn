import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
// import questionReducer from "./questions";
import questionsReducer from "./questions";
import usersReducer from "./users";
import postReducer from "./post";

export default combineReducers({
  authReducer,
  currentUserReducer,
  // questionReducer,
  questionsReducer,
  usersReducer,
  postReducer,
});
