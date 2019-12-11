import React from 'react';

const GameInstructionsDisplay = props => {

    const {
        gameMode,
        instruction,
    } = props;

    return (
        <div className="gameInstructionsBox">
            <h1>{gameMode}</h1>
            <h2>{instruction}</h2>
        </div>
    )
};

export default GameInstructionsDisplay;

