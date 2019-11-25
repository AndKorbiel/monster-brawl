import React, { Component } from "react";
import Main from "./components/main";
import Sidebar from './components/side';
import "./App.css";

class App extends Component {

  render() {

    return (
      <div className="App">
        <Main/>
        <Sidebar/>
      </div>
    );
  }
}

export default App;
