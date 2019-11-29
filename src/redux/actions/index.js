export const GENERATE_NEW_NAME = "GENERATE_NEW_NAME";
export const CHANGE_LOOK = "CHANGE_LOOK";
export const CHANGE_GAME_MODE = "CHANGE_GAME_MODE";
export const SPEND_LEVEL_UP_POINTS = "SPEND_LEVEL_UP_POINTS";

export function generateNewName(payload) {
  return {
    type: "GENERATE_NEW_NAME",
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
