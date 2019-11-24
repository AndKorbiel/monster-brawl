import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { mainReducer } from "./reducers/index";

import { AppContainer } from "./App";

import "./index.css";

const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
