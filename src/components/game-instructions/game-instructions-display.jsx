import React from 'react';

const GameInstructionsDisplay = props => {

    const {
        gameMode,
        instruction,
        levelUp,
        restart
    } = props;

    return (
        <div className="gameInstructionsBox">
            <h1>{instruction}</h1>
            {gameMode === "Pre-config" ? (
                <>
                    <p>Stats info:</p>
                    <p><b>Attack points</b> are responsible for the amount of damage a monster can inflict. Damage can be in range - from Attack points multiplied by 1 to Attack points multiplied by 1.4. In example: if your Attack is equal 10, than possible damage will be from range: 10 (10x1) to 14 (10x1.4).</p>
                    <p><b>Defence points</b> determine the chance of blocking the attack. The chance is calc based on percentage calculation: (damage to be done by the opponent divided by Defence points) divided by 1.4. In example: if your Defence is equal 5 and your opponent is attacking for 10 points of damage, thank you've got 35% chance to block the damage (becasue: (5 / 10) / 1.4 = 0.35).</p>
                    <p><b>Life points</b> determine how much damage you can take. The player which life points gets to 0 or less, losses the brawl.</p>
                </> )
                : "" }
            {gameMode === "Level-up" ? <button className="btn-lg" onClick={levelUp}>Level Up</button> : ""}
            {gameMode === "End-game" ? <button className="btn-lg" onClick={restart}>Restart</button> : ""}
        </div>
    )
};

export default GameInstructionsDisplay;

