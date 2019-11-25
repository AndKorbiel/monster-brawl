import { Action } from 'redux';
import { CHANGE_NAME, CHANGE_AGE} from "../../types";

// define action interfaces
export interface ChangeName extends Action {
    type: CHANGE_NAME;
    payload: string;
}

export interface ChangeAge extends Action {
    type: CHANGE_AGE;
    payload: number;
}

// define actions
export function changeName(payload : string) : ChangeName {
  return {
    type: "CHANGE_NAME",
    payload
  };
}

export function changeAge(payload : number) : ChangeAge {
    return {
        type: "CHANGE_AGE",
        payload
    };
}

export type Locality = ChangeName | ChangeAge;
