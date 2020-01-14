import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.css';

const middleware = applyMiddleware(thunk);
const store = createStore(mainReducer, composeWithDevTools(
    middleware
));

export default store;
