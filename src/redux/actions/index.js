export const GENERATE_NEW_USER_NAME = "GENERATE_NEW_USER_NAME";
export const GENERATE_NEW_CPU_NAME = "GENERATE_NEW_CPU_NAME";
export const CHANGE_LOOK = "CHANGE_LOOK";
export const CHANGE_GAME_MODE = "CHANGE_GAME_MODE";
export const SPEND_LEVEL_UP_POINTS = "SPEND_LEVEL_UP_POINTS";
export const GENERATE_CPU_MONSTER_STATS = "GENERATE_CPU_MONSTER_STATS";

export function generateNewUserName(payload) {
  return {
    type: "GENERATE_NEW_USER_NAME",
    payload
  };
}

export function generateNewCpuName(payload) {
    return {
        type: "GENERATE_NEW_CPU_NAME",
        payload
    };
}

export function changeLook(payload) {
  return {
    type: "CHANGE_LOOK",
    payload
  };
}

export function changeGameMode(payload) {
  return {
    type: "CHANGE_GAME_MODE",
    payload
  };
}

export function spendLevelUpPoints(payload) {
  return {
    type: "SPEND_LEVEL_UP_POINTS",
    payload
  };
}

export function generateCpuMonsterStats(payload) {
    return {
        type: "GENERATE_CPU_MONSTER_STATS",
        payload
    };
}
