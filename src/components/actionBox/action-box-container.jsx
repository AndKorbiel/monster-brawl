import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import ActionBoxDisplay from "./action-box-display";

class ActionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      attack: 0,
        currentTurn: "player",
        userTempDefencePoints: 0,
        userTempLifePoints: 0,
        cpuTempDefencePoints: 0,
        cpuTempLifePoints: 0,
    };
  }

  componentDidUpdate() {
      if (this.props.gameMode === "preFight") {
          const { userDefencePoints, userLifePoints, cpuDefencePoints, cpuLifePoints } = this.props;
          this.setState({
              userTempDefencePoints: userDefencePoints,
              userTempLifePoints: userLifePoints,
              cpuTempDefencePoints: cpuDefencePoints,
              cpuTempLifePoints: cpuLifePoints
          })
      }
  }

  calcAttack = () => {
    const { userAttackPoints } = this.props;
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomNumber = random(userAttackPoints / 2, userAttackPoints * 2);
    this.setState({
      attack: randomNumber
    });
      this.changeTurn()
  };

  changeTurn = () => {
      const { currentTurn } = this.state;
      let temp;
      temp = (currentTurn === "player") ? "comp" : "player";
      this.setState({
          currentTurn: temp
      })
  };

  render() {
    const { round, attack, currentTurn, userTempDefencePoints, userTempLifePoints, cpuTempDefencePoints, cpuTempLifePoints} = this.state;
    const { gameMode } = this.props;

    let instruction;

    if (gameMode === "Preconfig") {
      instruction = "Please configure your Monster";
    } else {
      instruction = "Prepare for brawl...!";
    }

    return (
      <ActionBoxDisplay
        gameMode={gameMode}
        instruction={instruction}
        round={round}
        attack={this.calcAttack}
        displayAttack={attack}
        currentTurn={currentTurn}
        userTempDefencePoints={userTempDefencePoints}
        userTempLifePoints={userTempLifePoints}
        cpuTempDefencePoints={cpuTempDefencePoints}
        cpuTempLifePoints={cpuTempLifePoints}
      />
    );
  }
}

const select = state => {
  return {
    gameMode: state.gameMode,
    userAttackPoints: state.monsterConfig.attackPoints,
    userDefencePoints: state.monsterConfig.defencePoints,
    userLifePoints: state.monsterConfig.lifePoints,
    cpuAttackPoints: state.cpuMonsterConfig.attackPoints,
    cpuDefencePoints: state.cpuMonsterConfig.defencePoints,
    cpuLifePoints: state.cpuMonsterConfig.lifePoints
  };
};

export default connect(select)(ActionBox);
