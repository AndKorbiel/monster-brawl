import { CHANGE_NAME, GENERATE_NEW_NAME, CHANGE_LOOK } from "../actions/index";

const initialState = {
  name: "Andzs",
  monsetrsImg: ["monster1.png", "monster2.png"],
  look: 0
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME: {
      return { ...state, name: action.payload };
    }
    case GENERATE_NEW_NAME: {
      return { ...state, name: action.payload };
    }
    case CHANGE_LOOK: {
      return { ...state, look: action.payload };
    }
    default:
      return state;
  }
}
