import {
  GENERATE_NEW_NAME,
  CHANGE_LOOK,
    CHANGE_GAME_MODE,
  SPEND_LEVEL_UP_POINTS
} from "../actions/index";

const initialState = {
  gameMode: "Preconfig",
  monsterConfig: {
    name: "Moonster",
    monsterImg: ["monster1.png", "monster2.png", "monster3.png"],
    lookVersion: 0,
    level: 1,
    attackPoints: 5,
    defencePoints: 5,
    lifePoints: 20,
    levelUpPoints: 5
  }
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NEW_NAME:
    case CHANGE_LOOK:
    case SPEND_LEVEL_UP_POINTS: {
      return {
        ...state,
        monsterConfig: monsterReducer(state.monsterConfig, action)
      };
    }
    case CHANGE_GAME_MODE: {
      return { ...state, gameMode: "preFight", monsterConfig: monsterReducer(state.monsterConfig, SPEND_LEVEL_UP_POINTS) };
    }
    default:
      return state;
  }
}

export function monsterReducer(state = initialState.monsterConfig, action) {
  switch (action.type) {
    case GENERATE_NEW_NAME: {
      return { ...state, name: action.payload };
    }
    case CHANGE_LOOK: {
      return { ...state, lookVersion: action.payload };
    }
    case SPEND_LEVEL_UP_POINTS: {
      return {
        ...state,
        levelUpPoints: action.payload.levelUpPoints,
        attackPoints: action.payload.attackPoints,
        defencePoints: action.payload.defencePoints,
        lifePoints: action.payload.lifePoints
      };
    }
    default:
      return state;
  }
}
