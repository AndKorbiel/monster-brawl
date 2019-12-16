import React, { Component } from "react";
import { connect } from "react-redux";
import ActionBoxDisplay from "./action-box-display";
import GameInstructionsDisplay from "../game-instructions/game-instructions-display";
import {changeGameModeEffect, levelUpEffects} from "../../redux/effects";

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
        block: false,
      actionLog: ["Prepare for brawl!"],
      endGame: false
    };
  }

  componentDidUpdate (prevProps) {
      if (this.props.gameMode != prevProps.gameMode) {
          this.setState({
              actionLog: ["Prepare for brawl!"]
          })
      }
  }

    startBrawl = () => {
        const {
            userDefencePoints,
            userLifePoints,
            cpuDefencePoints,
            cpuLifePoints
        } = this.props;
        this.setState({
            endGame: false,
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
              block: calcDamage.block
          }, () => {
              this.actionLog(this.state.currentTurn, this.state.attack, this.state.round);
              this.winingConditionChecker()
          });
      }
  };

    calcDamage = (currentPlayer) => {
        const {userAttackPoints, cpuAttackPoints} = this.props;
        let {cpuTempLifePoints, cpuTempDefencePoints, userTempLifePoints, userTempDefencePoints, block } = this.state;

        let randomNumber;
        let damageDone;

        if (currentPlayer === "player") {
            randomNumber = this.random(userAttackPoints / 1, userAttackPoints * 1.4);
            damageDone = this.damageMath(randomNumber, cpuTempDefencePoints, cpuTempLifePoints);
            cpuTempDefencePoints = damageDone.userTempDefencePoints ;
            cpuTempLifePoints = damageDone.userTempLifePoints;
        } else {
            randomNumber = this.random(cpuAttackPoints / 1, cpuAttackPoints * 1.4);
            damageDone = this.damageMath(randomNumber, userTempDefencePoints, userTempLifePoints);
            userTempLifePoints = damageDone.userTempLifePoints;
            userTempDefencePoints = damageDone.userTempDefencePoints;
        }

        block = damageDone.block;

        return { randomNumber, cpuTempDefencePoints, cpuTempLifePoints, userTempLifePoints, userTempDefencePoints, block }
    };

    damageMath = (randomNumber, userTempDefencePoints, userTempLifePoints) => {

        let blockChance = (userTempDefencePoints / randomNumber) / 1.4;
        let random = Math.random();

        if (random > blockChance) {
            return {
                userTempLifePoints : userTempLifePoints - randomNumber,
                userTempDefencePoints : userTempDefencePoints,
                block: false
            }
        } else {
            return  { userTempDefencePoints : userTempDefencePoints, userTempLifePoints : userTempLifePoints, block: true }
        }
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
              winner: currentWinner,
              round: 0,
              attack: 0,
              currentTurn: ["player", "cpu"],
              userTempDefencePoints: 0,
              userTempLifePoints: 0,
              cpuTempDefencePoints: 0,
              cpuTempLifePoints: 0,
          }, ()=> {
              this.actionLog();
              setTimeout(()=>{
                  if (currentWinner === "Player") {
                      this.props.changeGameMode("Level-up")
                  } else {
                      this.props.changeGameMode("End-game")
                  }
              }, 3000)
          });
      }
  };

  levelUp = () => {
      this.props.levelUp(3);
      this.props.changeGameMode("Pre-config")
  };

  restart = () => {
      window.location.reload();
  };

  actionLog = (attacker, damage, round) => {
      let { actionLog, endGame, winner, block } = this.state;

      if (endGame) {
          actionLog.push(`End game, ${winner} wins!`);
      } else {
          actionLog.push(`Round: ${round} - ${attacker} attacks for ${damage} ${block ? " - but it was blocked!" : ""}`);
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

    if (gameMode === "Pre-config") {
      instruction = "Please configure your Monster";
       return (
      <GameInstructionsDisplay gameMode={gameMode}
                               instruction={instruction} />
       )
    } else if (gameMode === "preFight") {
      instruction = "Prepare for brawl...!";
        return (
            <>
                <GameInstructionsDisplay gameMode={gameMode}
                                         instruction={instruction}/>
                <ActionBoxDisplay
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
            </>
        );
    } else if (gameMode === "Level-up") {
        instruction = "You have win and level up";
        return (
            <>
                <GameInstructionsDisplay gameMode={gameMode}
                                         instruction={instruction}
                                         levelUp={this.levelUp}/>
            </>
        )
    } else if (gameMode === "End-game") {
        instruction = "You have lost... want to play again?";
        return (
            <>
                <GameInstructionsDisplay gameMode={gameMode}
                                         instruction={instruction}
                                         restart={this.restart}/>
            </>
        )
    }
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

const mapDispatchToProps = dispatch => {
    return {
        changeGameMode: value => {
            dispatch(changeGameModeEffect(value));
        },
        levelUp: value => {
            dispatch(levelUpEffects(value));
        },
    }
};

export default connect(select, mapDispatchToProps)(ActionBox);
