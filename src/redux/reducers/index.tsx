import { Locality } from '../actions';
import { MainStore, initialState } from '../../types';
import { CHANGE_NAME, CHANGE_AGE } from "../../types";

export function locality(state = initialState, action: Locality) : MainStore {
  if (action.type === CHANGE_NAME) {
    return { ...state, name: action.payload };
  } else if (action.type === CHANGE_AGE) {
    return { ...state, age: action.payload}
  }
  return state;
}
