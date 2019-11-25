export const CHANGE_NAME = "CHANGE_NAME";
export const GENERATE_NEW_NAME = "GENERATE_NEW_NAME";
export const CHANGE_LOOK = "CHANGE_LOOK";

export function changeName(payload) {
  return {
    type: "CHANGE_NAME",
    payload
  };
}

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
