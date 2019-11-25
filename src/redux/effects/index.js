import { generateNewName, changeLook } from "../actions/index";

export const generateNewNameEffect = () => {
  return dispatch => {
    fetch("https://random-word-api.herokuapp.com/word?key=LVBO2PAN&number=1")
      .then(res => res.json())
      .then(myJSON => dispatch(generateNewName(myJSON)))
      .catch(err => console.log(err));
  };
};

export const changeLookEffect = () => {
  return dispatch => {
    let i = 1;
    dispatch(changeLook([i]));
  };
};
