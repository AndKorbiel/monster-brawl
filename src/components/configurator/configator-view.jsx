import React from 'react';
import ChangeButton from '../change-button/change-button';

const MonsterConfigDisplay = (props) => {
        const { gameMode, name, generateNewName, changeCounter, monsterImg, lookVersion, level, tempLevelUpPoints, attackPoints, tempAttackPoints,defencePoints, tempDefencePoints, lifePoints, tempLifePoints, saveConfig, addPoints } = props;
        return (
            <div className="monsterConfig">
                <p>{gameMode}</p>
                <h2>Monster name: {name}</h2>
                <ChangeButton gameMode={gameMode} methood={generateNewName} name={"generateNewName"} text={"Generate new name"} />
                <p> Look and feel</p>
                    <div className="look">
                        <ChangeButton gameMode={gameMode} methood={changeCounter} name={"prev"} text={"<"} />
                        <img src={"./img/" + monsterImg[lookVersion]} className="look" />
                        <ChangeButton gameMode={gameMode} methood={changeCounter} name={"next"} text={">"} />
                    </div>
                <p>Level: {level}</p>
                <p>Points to spend: {tempLevelUpPoints}</p>
                <p>Attack: {attackPoints + tempAttackPoints}</p>
                <ChangeButton gameMode={gameMode} methood={addPoints} name={"addAttackPoints"} text={"+"} c={"add"} dataFunc={"add"} />
                <ChangeButton gameMode={gameMode} methood={addPoints} name={"removeAttackPoints"} text={"-"} c={"remove"} dataFunc={"remove"} />
                <p>Defence: {defencePoints + tempDefencePoints}</p>
                <ChangeButton gameMode={gameMode} methood={addPoints} name={"addDefencePoints"} text={"+"} c={"add"} dataFunc={"add"} />
                <ChangeButton gameMode={gameMode} methood={addPoints} name={"removeDefencePoints"} text={"-"} c={"remove"} dataFunc={"remove"} />
                <p>Life points: {lifePoints + tempLifePoints}</p>
                <ChangeButton gameMode={gameMode} methood={addPoints} name={"addLifePoints"} text={"+"} c={"add"} dataFunc={"add"} />
                <ChangeButton gameMode={gameMode} methood={addPoints} name={"removeLifePoints"} text={"-"} c={"remove"} dataFunc={"remove"} />
                <ChangeButton gameMode={gameMode} methood={saveConfig} name={"saveConfig"} text={"Save config"} />
            </div>
        )
}

export default MonsterConfigDisplay;
