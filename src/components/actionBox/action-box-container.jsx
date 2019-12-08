import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import ActionBoxDisplay from "./action-box-display";

class ActionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 1,
      attack: 0,
      currentTurn: ["player", "cpu"],
      userTempDefencePoints: 0,
      userTempLifePoints: 0,
      cpuTempDefencePoints: 0,
      cpuTempLifePoints: 0
    };
  }

  startBrawl = () => {
    const {
      userDefencePoints,
      userLifePoints,
      cpuDefencePoints,
      cpuLifePoints
    } = this.props;
    this.setState({
      userTempDefencePoints: userDefencePoints,
      userTempLifePoints: userLifePoints,
      cpuTempDefencePoints: cpuDefencePoints,
      cpuTempLifePoints: cpuLifePoints
    });
    setInterval(() => {
      this.calcAttack();
    }, 2000);
  };

  random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  calcAttack = () => {
    const { userAttackPoints, cpuAttackPoints } = this.props;
    let { round, currentTurn } = this.state;
    let randomNumber;

    this.chooseAttacker();
    console.log(currentTurn);
    if (currentTurn === "player") {
      randomNumber = this.random(userAttackPoints / 2, userAttackPoints * 2);
    } else {
      randomNumber = this.random(cpuAttackPoints / 2, cpuAttackPoints * 2);
    }

    round++;

    this.setState({
      attack: randomNumber,
      round: round
    });
  };

  chooseAttacker = () => {
    let { round, currentTurn } = this.state;
    if (round === 1) {
      const starting = this.random(2, -1);
      currentTurn = currentTurn[starting];
      this.setState({
        currentTurn: currentTurn
      });
    } else {
      this.changeTurn();
    }
  };

  changeTurn = () => {
    const { currentTurn } = this.state;
    let temp;
    temp = currentTurn === "player" ? "cpu" : "player";
    this.setState({
      currentTurn: temp
    });
  };

  render() {
    const {
      round,
      attack,
      currentTurn,
      userTempDefencePoints,
      userTempLifePoints,
      cpuTempDefencePoints,
      cpuTempLifePoints
    } = this.state;
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
        startBrawl={this.startBrawl}
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
