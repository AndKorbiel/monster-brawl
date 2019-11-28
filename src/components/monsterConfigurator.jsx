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
        counter: 0,
        tempAttackPoints: 0,
        tempDefencePoints: 0,
        tempLifePoints: 0,
        tempLevelUpPoints: 0
    };
  }

    componentDidMount() {
        this.setState({
            tempLevelUpPoints: this.props.levelUpPoints
        })
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

  addPoints = event => {
      let name = event.target.name;
      let attr = event.target.getAttribute('data-func');
      let {levelUpPoints, attackPoints, defencePoints, lifePoints } = this.props;
      let {tempAttackPoints, tempDefencePoints, tempLifePoints, tempLevelUpPoints} = this.state;

      if (attr === "remove") {
          if (tempLevelUpPoints < levelUpPoints) {
              switch (name) {
                  case "removeAttackPoints": {
                      if (tempAttackPoints + attackPoints > attackPoints ) {
                          tempAttackPoints--;
                          tempLevelUpPoints++;
                      }
                      break;
                  }
                  case "removeDefencePoints": {
                      if (tempDefencePoints + defencePoints > defencePoints ) {
                          tempDefencePoints--;
                          tempLevelUpPoints++;
                      }
                      break;
                  }
                  case "removeLifePoints": {
                      if (tempLifePoints + lifePoints > lifePoints ) {
                          tempLifePoints--;
                          tempLevelUpPoints++;
                      }
                      break;
                  }
                  default: {
                      break;
                  }
              }
          }
      } else {
          if (tempLevelUpPoints !== 0) {
              switch (name) {
                  case "addAttackPoints": {
                      tempAttackPoints++;
                      break;
                  }
                  case "addDefencePoints": {
                      tempDefencePoints++;
                      break;
                  }
                  case "addLifePoints": {
                      tempLifePoints++;
                      break;
                  }
                  default: {
                      break;
                  }
              }
              tempLevelUpPoints--;
          }
      }

    this.setState({
          tempAttackPoints,
          tempDefencePoints,
          tempLifePoints,
          tempLevelUpPoints
    })
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
    } = this.props;
      const { tempAttackPoints, tempDefencePoints, tempLifePoints, tempLevelUpPoints } = this.state;


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
        <p>Points to spend: {tempLevelUpPoints}</p>
        <p>Attack: {attackPoints + tempAttackPoints}</p>
        <button name="removeAttackPoints" data-func="remove" onClick={this.addPoints}>
          -
        </button>
        <button name="addAttackPoints" data-func="add" onClick={this.addPoints}>
          +
        </button>
        <p>Defence: {defencePoints + tempDefencePoints}</p>
          <button name="removeDefencePoints" data-func="remove" onClick={this.addPoints}>
              -
          </button>
        <button name="addDefencePoints" onClick={this.addPoints}>
          +
        </button>
        <p>Life points: {lifePoints + tempLifePoints}</p>
          <button name="removeLifePoints" data-func="remove" onClick={this.addPoints}>
              -
          </button>
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
    name: state.monsterConfig.name,
    monsterImg: state.monsterConfig.monsterImg,
    lookVersion: state.monsterConfig.lookVersion,
    level: state.monsterConfig.level,
    attackPoints: state.monsterConfig.attackPoints,
    defencePoints: state.monsterConfig.defencePoints,
    lifePoints: state.monsterConfig.lifePoints,
    levelUpPoints: state.monsterConfig.levelUpPoints
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
