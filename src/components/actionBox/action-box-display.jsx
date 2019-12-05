import React from 'react';

const ActionBoxDisplay =(props)=> {
    const {gameMode, instruction, round} = props;

    return (
        <div className="actionBox">
            <h1>{gameMode}</h1>
            <h2>{instruction}</h2>
            <h3>Round: {round}</h3>
        </div>
    )
};

export default ActionBoxDisplay;
