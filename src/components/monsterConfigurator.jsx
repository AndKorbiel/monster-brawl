import React, { Component } from "react";
import { connect } from "react-redux";
import {
  generateNewNameEffect,
  changeLookEffect,
  saveConfigEffect,
  spendLevelUpPointsEffect
} from "../redux/effects";

class MonsterConfigurator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  changeCounter = event => {
    let name = event.target.name;
    let tempCounter = this.state.counter;

    if (name === "next") {
      tempCounter++;
    } else {
      tempCounter--;
    }

    if (tempCounter === this.props.monsterImg.length) {
      tempCounter = 0;
    } else if (tempCounter < 0) {
      tempCounter = this.props.monsterImg.length - 1;
    }
    this.setState({
      counter: tempCounter
    });
    this.props.changeLook(tempCounter);
  };

  addPoints = (event) => {
      let name = event.target.name;
      let { levelUpPoints, attackPoints, defencePoints, lifePoints  } = this.props;

      if (this.props.levelUpPoints !== 0) {

          switch (name) {
              case 'addAttackPoints' : {
                  attackPoints++;
                  break;
              }
              case 'addDefencePoints' : {
                  defencePoints++;
                  break;
              }
              case 'addLifePoints' : {
                  lifePoints++;
                  break;
              }
              default : {
                  break;
              }
          }

          levelUpPoints--;
          let value = {levelUpPoints, attackPoints, defencePoints, lifePoints};
          this.props.spendLevelUpPoints(value);
      }
  };

  render() {
    const {
      generateNewName,
      gameMode,
      name,
      lookVersion,
      monsterImg,
      level,
      attackPoints,
      defencePoints,
      lifePoints,
      saveConfig,
      levelUpPoints
    } = this.props;

    const $generateNameButton =
      gameMode === "Preconfig" ? (
        <button name="generateName" onClick={generateNewName}>
          Generate new name
        </button>
      ) : (
        ""
      );

    const $monsterLookPrevButton =
      gameMode === "Preconfig" ? (
        <button onClick={this.changeCounter} name="prev">
          Prev
        </button>
      ) : (
        ""
      );

    const $monsterLookNextButton =
      gameMode === "Preconfig" ? (
        <button onClick={this.changeCounter} name="next">
          Next
        </button>
      ) : (
        ""
      );

    const $saveConfigButton =
      gameMode === "Preconfig" ? (
        <button onClick={saveConfig} name="saveConfig">
          Save
        </button>
      ) : (
        ""
      );

    return (
      <div className="config">
        <p>{gameMode}</p>
        <h2>Monster name: {name}</h2>
        {$generateNameButton}
        <p>Look and feel</p>
        {$monsterLookPrevButton}
        <img src={"./img/" + monsterImg[lookVersion]} className="look" />
        {$monsterLookNextButton}
        <p>Level: {level}</p>
        <p>Points to spend: {levelUpPoints}</p>
        <p>Attack: {attackPoints}</p>
          <button name="removeAttackPoints" onClick={this.changeAttackPoints}>
              -
          </button>
        <button name="addAttackPoints" onClick={this.addPoints}>
          +
        </button>
        <p>Defence: {defencePoints}</p>
          <button name="addDefencePoints" onClick={this.addPoints}>
              +
          </button>
        <p>Life points: {lifePoints}</p>
          <button name="addLifePoints" onClick={this.addPoints}>
              +
          </button>
        {$saveConfigButton}
      </div>
    );
  }
}

const select = state => {
  return {
    gameMode: state.gameMode,
    name: state.name,
    monsterImg: state.monsterImg,
    lookVersion: state.lookVersion,
    level: state.level,
    attackPoints: state.attackPoints,
    defencePoints: state.defencePoints,
    lifePoints: state.lifePoints,
    levelUpPoints: state.levelUpPoints
  };
};

const mapDisptachToProps = disptach => {
  return {
    generateNewName: () => {
      disptach(generateNewNameEffect());
    },
    changeLook: value => {
      disptach(changeLookEffect(value));
    },
    saveConfig: () => {
      disptach(saveConfigEffect());
    },
    spendLevelUpPoints: value => {
      disptach(spendLevelUpPointsEffect(value));
    }
  };
};

export default connect(select, mapDisptachToProps)(MonsterConfigurator);
