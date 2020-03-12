import {
    generateNewUserName,
    generateNewCpuName,
  changeLook,
    changeGameMode,
  spendLevelUpPoints,
    generateCpuMonsterStats,
    levelUp
} from "../actions/index";

export const generateNewNameEffect = (value) => {
  return dispatch => {
    fetch("https://api.wordnik.com/v4/words.json/randomWord?api_key=5tlss5fk37wzhgjb0yemzcskbgz2wjab501uv0s5kdvano1xa")
      .then(res => res.json())
      .then(myJSON => {
        if (value === "user") {
            dispatch(generateNewUserName(myJSON.word))
        } else {
            dispatch(generateNewCpuName(myJSON.word))
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

export const levelUpEffects = (value) => {
    return dispatch => {
        dispatch(levelUp(value));
    };
};
