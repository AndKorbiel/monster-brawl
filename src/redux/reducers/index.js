import { CHANGE_NAME } from "../actions/index";

const initialState = {
  name: "Andzs"
};

export function mainReducer(state = initialState, action) {
  if (action.type === CHANGE_NAME) {
    return { ...state, name: action.payload };
  }
  return state;
}
