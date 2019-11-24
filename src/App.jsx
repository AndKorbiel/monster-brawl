import React, { Component } from "react";
import { connect } from "react-redux";
import { changeName } from "./redux/actions/index";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    this.props.changeName(name);
    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1>Hello {this.props.name}</h1>
        <h2>Local {name}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Enter new name"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Click</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: name => dispatch(changeName(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
