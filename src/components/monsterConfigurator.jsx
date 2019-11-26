import React, { Component } from "react";
import { connect } from "react-redux";
import { generateNewNameEffect, changeLookEffect } from "../redux/effects";

class MonsterConfigurator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    changeCounter = (event) => {
        let name = event.target.name;
        let tempCounter = this.state.counter;

        if (name === "next") {
            tempCounter++
        } else {
            tempCounter--
        }

        if (tempCounter === this.props.monsterImg.length) {
            tempCounter = 0;
        } else if (tempCounter < 0) {
            tempCounter = this.props.monsterImg.length -1
        }
        this.setState({
            counter : tempCounter
        });
        this.props.changeLook(tempCounter);
    };

  render() {
    const { generateNewName, gameMode, name, lookVersion, monsterImg, level, attackPoints, defencePoints, lifePoints } = this.props;
    return (
      <div className="config">
          <p>{gameMode}</p>
        <h2>Monster name: {name}</h2>
        <button name="generateName" onClick={generateNewName}>
          Generate new name
        </button>
        <p>Look and feel</p>
        <button onClick={this.changeCounter} name="prev">
          Prev
        </button>
        <img src={"./img/" + monsterImg[lookVersion]} className="look" />
        <button onClick={this.changeCounter} name="next">
          Next
        </button>
        <p>Level: {level}</p>
        <p>Attack: {attackPoints}</p>
        <p>Defence: {defencePoints}</p>
        <p>Life points: {lifePoints}</p>
      </div>
    );
  }
}

const select = state => {
  return {
      gameMode : state.gameMode,
      name: state.name,
      monsterImg: state.monsterImg,
      lookVersion: state.lookVersion,
      level: state.level,
      attackPoints: state.attackPoints,
      defencePoints: state.defencePoints,
      lifePoints: state.lifePoints
  };
};

const mapDisptachToProps = disptach => {
  return {
    generateNewName: () => {
      disptach(generateNewNameEffect());
    },
    changeLook: value => {
      disptach(changeLookEffect(value));
    }
  };
};

export default connect(select, mapDisptachToProps)(MonsterConfigurator);
