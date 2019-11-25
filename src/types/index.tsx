// store
export interface MainStore {
    name: string,
    age: number
}

export const initialState : MainStore = {
    name: '',
    age: 0
};

// local state inferfaces
export interface localName {
    isWorking: boolean,
    localName: string
}

// types
export const CHANGE_NAME = "CHANGE_NAME";
export type CHANGE_NAME = typeof CHANGE_NAME;
export const CHANGE_AGE = "CHANGE_AGE";
export type CHANGE_AGE = typeof CHANGE_AGE;
