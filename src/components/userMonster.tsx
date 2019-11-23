import React, { Component } from "react";
import GamePlay from "../interfaces/gamePlay.interface";
import UserState from "../interfaces/userState.inferface";

class UserMonster extends Component<GamePlay, UserState> {
  constructor(props: GamePlay) {
    super(props);
    this.state = {
      curentLevel: 1,
      name: "",
      lifePoints: 5,
      armourPoints: 5,
      attackPoints: 5,
      pointsToDistribute: 5
    };
  }

  levelUp = () => {
    this.setState(state => ({
      ...state,
      curentLevel: state.curentLevel + 1
    }));
  };

  generateName = () => {
    fetch("https://random-word-api.herokuapp.com/word?key=HTBQY7GD&number=1")
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          name: data[0]
        }));
      })
      .catch(err => console.log(err));
  };

  render() {
    const { preGameConfig } = this.props;
    const {
      curentLevel,
      name,
      lifePoints,
      armourPoints,
      attackPoints
    } = this.state;
    const a: string = preGameConfig ? "true" : "false";

    return (
      <div>
        <h1>Monster name: {name}</h1>
        <h2>Current level: {curentLevel}</h2>
        <h3>Life points: {lifePoints}</h3>
        <button onClick={this.generateName} name="lifePoints">
          -
        </button>
        <button onClick={this.generateName} name="lifePoints">
          +
        </button>
        <h3>Armour: {armourPoints}</h3>
        <h3>Attack points: {attackPoints}</h3>
        <button onClick={this.generateName}>Get name</button>
        <p>{a}</p>
      </div>
    );
  }
}

export default UserMonster;
