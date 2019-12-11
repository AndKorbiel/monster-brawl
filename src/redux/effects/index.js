import {
    generateNewUserName,
    generateNewCpuName,
  changeLook,
    changeGameMode,
  spendLevelUpPoints,
    generateCpuMonsterStats
} from "../actions/index";

export const generateNewNameEffect = (value) => {
  return dispatch => {
    fetch("https://random-word-api.herokuapp.com/word?key=9QQUWG3P&number=1")
      .then(res => res.json())
      .then(myJSON => {
        if (value === "user") {
            dispatch(generateNewUserName(myJSON))
        } else {
            dispatch(generateNewCpuName(myJSON))
        }

      })
      .catch(err => console.log(err));
  };
};

export const changeLookEffect = value => {
  return dispatch => {
    dispatch(changeLook([value]));
  };
};

export const changeGameModeEffect = (value) => {
  return dispatch => {
    dispatch(changeGameMode(value));
  };
};

export const spendLevelUpPointsEffect = value => {
  return dispatch => {

    if (value.user === "user") {
        dispatch(spendLevelUpPoints(value));
    } else {
        dispatch(generateCpuMonsterStats(value));
    }

  };
};
