import * as types from "../constants/index";
let initialState = {
  data: [],
};
let myReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.NEW_BOOKS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
export default myReducers;
