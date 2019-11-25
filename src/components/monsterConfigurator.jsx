import React, { Component } from "react";
import { connect } from "react-redux";
import { generateNewNameEffect, changeLookEffect } from "../redux/effects";

class MonsterConfigurator extends Component {
  render() {
    const { generateNewName, name, look, monsetrsImg, changeLook } = this.props;
    return (
      <div className="config">
        <h2>Monster name: {name}</h2>
        <button name="generateName" onClick={generateNewName}>
          Generate new name
        </button>
        <p>Look and feel</p>
        <button onClick={changeLook} name="prev">
          Prev
        </button>
        <img src={"./img/" + monsetrsImg[look]} className="look" />
        <button onClick={changeLook} name="next">
          Next
        </button>
        <p>Level: </p>
        <p>Attack:</p>
        <p>Defence:</p>
        <p>Life points:</p>
      </div>
    );
  }
}

const select = state => {
  return {
    name: state.name,
    monsetrsImg: state.monsetrsImg,
    look: state.look
  };
};

const mapDisptachToProps = disptach => {
  return {
    generateNewName: () => {
      disptach(generateNewNameEffect());
    },
    changeLook: event => {
      disptach(changeLookEffect(event));
    }
  };
};

export default connect(select, mapDisptachToProps)(MonsterConfigurator);
