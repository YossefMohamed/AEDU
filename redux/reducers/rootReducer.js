import { combineReducers } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INC") return { ...state, counter: state.counter + 1 };
  else {
    return state;
  }
};
const rootReducer = combineReducers({ counter: counterReducer });

export default rootReducer;
