import React, { Component } from "react";
import MonsterConfigurator from "./components/configurator/configurator-container";
import CpuMonsterGenerator from "./components/cpu-monsters-generator/cpu-monsters-container";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <MonsterConfigurator />
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <CpuMonsterGenerator />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
