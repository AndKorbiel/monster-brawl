import {
    GENERATE_NEW_USER_NAME,
    GENERATE_NEW_CPU_NAME,
    CHANGE_LOOK,
    CHANGE_GAME_MODE,
    SPEND_LEVEL_UP_POINTS,
    GENERATE_CPU_MONSTER_STATS,
    LEVEL_UP
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
  },
  cpuMonsterConfig: {
      name: "CPU",
      lookVersion: 0,
      level: 1,
      attackPoints: 0,
      defencePoints: 0,
      lifePoints: 0,
      levelUpPoints: 5,
  }
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NEW_USER_NAME:
    case CHANGE_LOOK:
    case SPEND_LEVEL_UP_POINTS:
      case LEVEL_UP:  {
      return {
        ...state,
          cpuMonsterConfig: cpuMonsterReducer(state.cpuMonsterConfig, action),
          monsterConfig: monsterReducer(state.monsterConfig, action),
      };
    }
    case GENERATE_NEW_CPU_NAME:
      case GENERATE_CPU_MONSTER_STATS:
        return {
            ...state,
            cpuMonsterConfig: cpuMonsterReducer(state.cpuMonsterConfig, action)
        };
    case CHANGE_GAME_MODE: {
      return {
        ...state,
        gameMode: action.payload,
        monsterConfig: monsterReducer(
          state.monsterConfig,
          SPEND_LEVEL_UP_POINTS
        )
      };
    }
    default:
      return state;
  }
}

export function monsterReducer(state = initialState.monsterConfig, action) {
  switch (action.type) {
    case GENERATE_NEW_USER_NAME: {
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
      case LEVEL_UP: {
        return {
            ...state,
            levelUpPoints: action.payload * state.level,
            level: state.level + 1,
        }
      }
    default:
      return state;
  }
}

export function cpuMonsterReducer(state = initialState.cpuMonsterConfig, action){
  switch (action.type) {
    case GENERATE_NEW_CPU_NAME: {
      return { ...state, name: action.payload };
    }
      case GENERATE_CPU_MONSTER_STATS: {
          return {
              ...state,
              attackPoints: action.payload.attackPoints,
              defencePoints: action.payload.defencePoints,
              lifePoints: action.payload.lifePoints
          };
      }
      case LEVEL_UP: {
          return {
              ...state,
              levelUpPoints: action.payload * state.level,
              level: state.level + 1,
          }
      }
    default:
      return state;
  }
}
