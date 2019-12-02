import React, { Component } from "react";
import { connect } from "react-redux";

import MonsterConfigDisplay from "../configurator/configator-view";
import {generateNewNameEffect, spendLevelUpPointsEffect} from "../../redux/effects";

class CpuMonsterGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpuLookVersion: 0,
        tempAttackPoints: 0,
        tempDefencePoints: 0,
        tempLifePoints: 0
    };
  }

  componentDidMount() {
    let num = Math.floor(Math.random() * (2+ 1));
    this.setState({
      ...this.state,
      cpuLookVersion: num
    });

    this.generateMonsterStatistics();
    this.props.generateNewName();
  }

  generateMonsterStatistics = () => {
      let {levelUpPoints, attackPoints, defencePoints, lifePoints} = this.props;
      let {tempAttackPoints, tempDefencePoints, tempLifePoints} = this.state;

      for (let i = 0; i < levelUpPoints; i++) {
          let random = Math.floor(Math.random() * (2 + 1));

          switch (random) {
              case 0 :
                  tempAttackPoints++;
                  break;
              case 1 :
                  tempDefencePoints++;
                  break;
              case 2 :
                  tempLifePoints++;
                  break;
              default:
                  break;
          }

          this.setState({
              tempAttackPoints,
              tempDefencePoints,
              tempLifePoints,
          });
      }

      attackPoints = attackPoints + tempAttackPoints;
      defencePoints = defencePoints + tempDefencePoints;
      lifePoints = lifePoints + tempLifePoints;

      this.props.spendLevelUpPoints({attackPoints, defencePoints, lifePoints});
  };

  render() {
    const { monsterImg, level, name, attackPoints, defencePoints, lifePoints} = this.props;
    const { cpuLookVersion } = this.state;
    return (
      <div className="config">
        <MonsterConfigDisplay
          monsterImg={monsterImg}
          lookVersion={cpuLookVersion}
          level={level}
          name={name}
          attackPoints={attackPoints}
          defencePoints={defencePoints}
          lifePoints={lifePoints}
        />
      </div>
    );
  }
}

const select = state => {
  return {
    gameMode: state.gameMode,
    level: state.monsterConfig.level,
    levelUpPoints: state.monsterConfig.levelUpPoints,
    monsterImg: state.monsterConfig.monsterImg,
      name: state.cpuMonsterConfig.name,
      attackPoints: state.cpuMonsterConfig.attackPoints,
      defencePoints: state.cpuMonsterConfig.defencePoints,
      lifePoints: state.cpuMonsterConfig.lifePoints,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      generateNewName: () => {
          dispatch(generateNewNameEffect('CPU'));
      },
      spendLevelUpPoints: value => {
          dispatch(spendLevelUpPointsEffect(value));
      }
  }
};

export default connect(select, mapDispatchToProps)(CpuMonsterGenerator);
