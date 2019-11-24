export const CHANGE_NAME = "CHANGE_NAME";

export function changeName(payload) {
  return {
    type: "CHANGE_NAME",
    payload
  };
}
