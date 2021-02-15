import { combineReducers } from "redux";
import login from "./login.reducer";
import newBooks from "./newbook.reducer";
export const myReducers = combineReducers({
  login,
  newBooks,
});
