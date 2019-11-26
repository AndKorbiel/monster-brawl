import { CHANGE_NAME, GENERATE_NEW_NAME, CHANGE_LOOK } from "../actions/index";

const initialState = {
      gameMode: "Preconfig",
      name: "Moonster",
      monsterImg: ["monster1.png", "monster2.png", "monster3.png"],
      lookVersion: 0,
      level: 1,
      attackPoints: 5,
      defencePoints: 5,
      lifePoints: 20
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
      return { ...state, lookVersion: action.payload };
    }
    default:
      return state;
  }
}
