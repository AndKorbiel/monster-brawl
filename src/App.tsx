import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsFetched } from "./actions";
import "./App.css";

class App extends Component<{}, {}> {
  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.props.contactsFetched(json.results));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.props.contacts}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state: { contacts: any }) => {
  return {
    contacts: state.contacts
  };
};
const mapDispatchToProps = { contactsFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
