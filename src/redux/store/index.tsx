import { createStore } from "redux";
import { locality } from '../reducers';
import { MainStore } from "../../types";
import { Locality } from "../actions";

const store = createStore<MainStore, Locality, any, any>(locality, {
    name: 'Ands',
    age: 2
});

export default store;
