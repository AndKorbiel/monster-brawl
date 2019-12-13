import React, { Component } from "react";
import { connect } from "react-redux";
import {
  generateNewNameEffect,
  changeLookEffect,
  changeGameModeEffect,
  spendLevelUpPointsEffect
} from "../../redux/effects/index";
import MonsterConfigDisplay from "./configator-view";

class ConfiguratorContainer extends Component {
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

    componentDidUpdate(prevProps) {
      if (this.props.levelUpPoints != prevProps.levelUpPoints) {
          this.setState({
              tempLevelUpPoints: this.props.levelUpPoints
          })
      }
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
    });
  };

    saveConfig = () => {
      let {levelUpPoints, attackPoints, defencePoints, lifePoints } = this.props;
      let {tempAttackPoints, tempDefencePoints, tempLifePoints, tempLevelUpPoints} = this.state;
      attackPoints = attackPoints + tempAttackPoints;
      levelUpPoints = tempLevelUpPoints;
      defencePoints = defencePoints + tempDefencePoints;
      lifePoints = lifePoints + tempLifePoints;
      this.props.spendLevelUpPoints({user: "user", attackPoints, levelUpPoints, defencePoints, lifePoints});
      this.props.changeGameMode("preFight")
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
      lifePoints
    } = this.props;
      const { tempAttackPoints, tempDefencePoints, tempLifePoints, tempLevelUpPoints } = this.state;

    return (
      <div className="config">
          <MonsterConfigDisplay gameMode={gameMode} name={name} generateNewName={generateNewName}
                                changeCounter={this.changeCounter} monsterImg={monsterImg} lookVersion={lookVersion}
                                level={level} tempLevelUpPoints={tempLevelUpPoints}
                                attackPoints={attackPoints} tempAttackPoints={tempAttackPoints}
                                defencePoints={defencePoints} tempDefencePoints={tempDefencePoints}
                                lifePoints={lifePoints} tempLifePoints={tempLifePoints}
                                addPoints={this.addPoints} saveConfig={this.saveConfig}
          />
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

const mapDisptachToProps = dispatch => {
  return {
    generateNewName: () => {
        dispatch(generateNewNameEffect('user'));
    },
    changeLook: value => {
        dispatch(changeLookEffect(value));
    },
      changeGameMode: value => {
          dispatch(changeGameModeEffect(value));
    },
    spendLevelUpPoints: value => {
        dispatch(spendLevelUpPointsEffect(value));
    }
  };
};

export default connect(select, mapDisptachToProps)(ConfiguratorContainer);
