import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "../reducers/index";
import 'bootstrap/dist/css/bootstrap.css';

const middleware = applyMiddleware(thunk);
const store = createStore(mainReducer, middleware);

export default store;
