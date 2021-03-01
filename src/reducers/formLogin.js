import * as types from "../constants/index";
let formLoginStatus = {
  data: false,
};
let myReducers = (state = formLoginStatus, action) => {
  switch (action.type) {
    case types.FORM_LOGIN_STATUS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
export default myReducers;
