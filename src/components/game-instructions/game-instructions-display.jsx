import React from 'react';

const GameInstructionsDisplay = props => {

    const {
        gameMode,
        instruction,
        levelUp
    } = props;

    return (
        <div className="gameInstructionsBox">
            <h1>{gameMode}</h1>
            <h2>{instruction}</h2>
            {gameMode === "levelUp" ? <button onClick={levelUp}>Level Up</button> : ""}
        </div>
    )
};

export default GameInstructionsDisplay;

