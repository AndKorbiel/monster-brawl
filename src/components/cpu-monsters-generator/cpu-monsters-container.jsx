import React, { Component } from "react";
import { connect } from "react-redux";

import MonsterConfigDisplay from "../configurator/configator-view";

class CpuMonsterGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpuLookVersion: 0
    };
  }

  componentDidMount() {
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    this.setState({
      ...this.state,
      cpuLookVersion: num
    });
  }
  render() {
    const { monsterImg } = this.props;
    const { cpuLookVersion } = this.state;
    return (
      <div className="config">
        <MonsterConfigDisplay
          monsterImg={monsterImg}
          lookVersion={cpuLookVersion}
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
    monsterImg: state.monsterConfig.monsterImg
  };
};

export default connect(select)(CpuMonsterGenerator);
