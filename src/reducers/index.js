import { combineReducers } from "redux";
import login from "./login.reducer";
import newBooks from "./newbook.reducer";
import bookReview from "./review.reducer";
import formLoginStatus from "./formLogin";
export const myReducers = combineReducers({
  login,
  newBooks,
  bookReview,
  formLoginStatus,
});
