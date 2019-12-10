import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import ActionBoxDisplay from "./action-box-display";

class ActionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 0,
      attack: 0,
      currentTurn: ["player", "cpu"],
      userTempDefencePoints: 0,
      userTempLifePoints: 0,
      cpuTempDefencePoints: 0,
      cpuTempLifePoints: 0,
      actionLog: ["Prepare for brawl!"],
        endGame: false
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
    // setInterval(() => {
    //   this.playRound();
    // }, 2000);
  };

  random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  playRound = () => {
      let {round, endGame} = this.state;
      if (!endGame) {

          let currentPlayer = this.setCurrentPlayer();
          let calcDamage = this.calcDamage(currentPlayer);
          round++;

          this.setState({
              attack: calcDamage.randomNumber,
              round: round,
              cpuTempLifePoints: calcDamage.cpuTempLifePoints,
              cpuTempDefencePoints: calcDamage.cpuTempDefencePoints,
              userTempLifePoints: calcDamage.userTempLifePoints,
              userTempDefencePoints: calcDamage.userTempDefencePoints,
              currentTurn: currentPlayer,
          }, () => {
              this.actionLog(this.state.currentTurn, this.state.attack, this.state.round);
              this.winingConditionChecker()
          });
      }
  };

    calcDamage = (currentPlayer) => {
        const {userAttackPoints, cpuAttackPoints} = this.props;
        let {cpuTempLifePoints, cpuTempDefencePoints, userTempLifePoints, userTempDefencePoints } = this.state;

        let randomNumber;
        if (currentPlayer === "player") {
            randomNumber = this.random(userAttackPoints / 2, userAttackPoints * 2);

            if (randomNumber > cpuTempDefencePoints) {
                cpuTempLifePoints = cpuTempLifePoints - (randomNumber - cpuTempDefencePoints);
                cpuTempDefencePoints = 0;
            } else {
                cpuTempDefencePoints = cpuTempDefencePoints - randomNumber;
            }

        } else {
            randomNumber = this.random(cpuAttackPoints / 2, cpuAttackPoints * 2);

            if (randomNumber > userTempDefencePoints) {
                userTempLifePoints = userTempLifePoints - (randomNumber - userTempDefencePoints);
                userTempDefencePoints = 0;
            } else {
                userTempDefencePoints = userTempDefencePoints - randomNumber;
            }
        }

        // function damageMath(userTempDefencePoints, userTempLifePoints) {
        //     randomNumber = this.random(userAttackPoints / 2, userAttackPoints * 2);
        //
        //     if (randomNumber > userTempDefencePoints) {
        //         userTempLifePoints = userTempLifePoints - (randomNumber - userTempDefencePoints);
        //         userTempDefencePoints = 0;
        //     } else {
        //         userTempDefencePoints = userTempLifePoints - randomNumber;
        //     }
        // }

        return { randomNumber, cpuTempDefencePoints, cpuTempLifePoints, userTempLifePoints, userTempDefencePoints }
    };

  setCurrentPlayer = () => {
      let {round, currentTurn } = this.state;
      let starting = this.random(2, -1);
      let currentPlayer = '';

      if (round === 0) {
          currentPlayer = currentTurn[starting];
      } else {
          if (currentTurn === "player") {
              currentPlayer = "cpu"
          } else {
              currentPlayer = "player"
          }
      }
      return currentPlayer
  };

  winingConditionChecker = () => {
      let { cpuTempLifePoints, userTempLifePoints } = this.state;
      let currentWinner;

      if (cpuTempLifePoints <= 0 || userTempLifePoints <= 0) {

          if (cpuTempLifePoints <= 0) {
              currentWinner = "Player";
          } else {
              currentWinner = "CPU";
          }

          this.setState({
              endGame: true,
              winner: currentWinner
          }, ()=> { this.actionLog(); });
      }
  };

  actionLog = (attacker, damage, round) => {
      let { actionLog, endGame, winner } = this.state;

      if (endGame) {
          actionLog.push(`End game, ${winner} wins!`);
      } else {
          actionLog.push(`Round: ${round} - ${attacker} attacks for ${damage}`);
      }

      this.setState({
          actionLog: actionLog
      })
  };

  render() {
    const {
      round,
      userTempDefencePoints,
      userTempLifePoints,
      cpuTempDefencePoints,
      cpuTempLifePoints,
        actionLog
    } = this.state;
    const { gameMode, userAttackPoints, cpuAttackPoints } = this.props;

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
        attack={this.playRound}
        startBrawl={this.startBrawl}
        userAttackPoints={userAttackPoints}
        userTempDefencePoints={userTempDefencePoints}
        userTempLifePoints={userTempLifePoints}
        cpuAttackPoints={cpuAttackPoints}
        cpuTempDefencePoints={cpuTempDefencePoints}
        cpuTempLifePoints={cpuTempLifePoints}
        actionLog={actionLog}
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
