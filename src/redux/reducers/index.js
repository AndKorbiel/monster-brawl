import {
  CHANGE_NAME,
  GENERATE_NEW_NAME,
  CHANGE_LOOK,
  SAVE_CONFIG,
  SPEND_LEVEL_UP_POINTS
} from "../actions/index";

const initialState = {
  gameMode: "Preconfig",
  name: "Moonster",
  monsterImg: ["monster1.png", "monster2.png", "monster3.png"],
  lookVersion: 0,
  level: 1,
  attackPoints: 5,
  defencePoints: 5,
  lifePoints: 20,
  levelUpPoints: 5
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
    case SAVE_CONFIG: {
      return { ...state, gameMode: "preFight" };
    }
    case SPEND_LEVEL_UP_POINTS: {
      return {
        ...state,
        levelUpPoints: action.payload.levelUpPoints,
        attackPoints: action.payload.attackPoints,
        defencePoints: action.payload.defencePoints,
          lifePoints: action.payload.lifePoints,
      };
    }
    default:
      return state;
  }
}
