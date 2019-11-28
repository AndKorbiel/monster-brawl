import React from 'react';

const MonsterConfigDisplay = (props) => {
        const { gameMode, name, $generateNameButton, $monsterLookPrevButton, $monsterLookNextButton, monsterImg, lookVersion, level, tempLevelUpPoints, attackPoints, tempAttackPoints, $attackPointsButtons, defencePoints, tempDefencePoints, $defencePointsButtons, lifePoints, tempLifePoints, $lifePointsButtons, $saveConfigButton } = props;
        return (
            <div className="monsterConfig">
                <p>{gameMode}</p>
                <h2>Monster name: {name}</h2>
                {$generateNameButton}
                <p>Look and feel</p>
                {$monsterLookPrevButton}
                <img src={"./img/" + monsterImg[lookVersion]} className="look" />
                {$monsterLookNextButton}
                <p>Level: {level}</p>
                <p>Points to spend: {tempLevelUpPoints}</p>
                <p>Attack: {attackPoints + tempAttackPoints}</p>
                {$attackPointsButtons}
                <p>Defence: {defencePoints + tempDefencePoints}</p>
                {$defencePointsButtons}
                <p>Life points: {lifePoints + tempLifePoints}</p>
                {$lifePointsButtons }
                {$saveConfigButton}
            </div>
        )
}

export default MonsterConfigDisplay;
