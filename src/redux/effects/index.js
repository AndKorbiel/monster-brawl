import {
  generateNewName,
  changeLook,
    changeGameMode,
  spendLevelUpPoints
} from "../actions/index";

export const generateNewNameEffect = () => {
  return dispatch => {
    fetch("https://random-word-api.herokuapp.com/word?key=9QQUWG3P&number=1")
      .then(res => res.json())
      .then(myJSON => dispatch(generateNewName(myJSON)))
      .catch(err => console.log(err));
  };
};

export const changeLookEffect = value => {
  return dispatch => {
    dispatch(changeLook([value]));
  };
};

export const changeGameModeEffect = () => {
  return dispatch => {
    dispatch(changeGameMode());
  };
};

export const spendLevelUpPointsEffect = value => {
  return dispatch => {
    dispatch(spendLevelUpPoints(value));
  };
};
