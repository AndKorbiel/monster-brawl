import React, { Component } from "react";
import UserMonster from "./components/userMonster";
import GamePlay from "./interfaces/gamePlay.interface";
import "./App.css";

class App extends Component<{}, GamePlay> {
  constructor(props: any) {
    super(props);
    this.state = {
      preGameConfig: true,
      fightStage: false,
      levelUp: false,
      endGame: false
    };
  }
  render() {
    const { preGameConfig } = this.state;

    return (
      <div className="App">
        <UserMonster preGameConfig={preGameConfig} />
      </div>
    );
  }
}

export default App;
