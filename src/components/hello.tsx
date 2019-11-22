import * as React from 'react';

import UserInterface from '../interfaces/interfaces';
import State1 from "../interfaces/interfaces";


export default class MyClass extends React.Component<{}> {
    state: State1;
    constructor (props : any) {
        super(props);
        this.state = {
            magiWord: "Magic!",
            name: "and",
            age: 21
        }
    }

    render() {
        return (
            <div>Hello<h2>{this.state.name}</h2></div>
        )
    }
}
