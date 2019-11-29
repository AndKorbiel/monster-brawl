import React, { Component } from "react";
import MonsterConfigurator from "./components/configurator/configurator-container";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MonsterConfigurator />
      </div>
    );
  }
}

export default App;
