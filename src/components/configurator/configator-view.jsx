import React from "react";
import ChangeButtonDisplay from "../change-button/change-button-display";
import StatsDisplay from "../stats-display/stats-display-view";
import "../../css/config.css";

const MonsterConfigDisplay = props => {
  const {
    gameMode,
    name,
    generateNewName,
    changeCounter,
    monsterImg,
    lookVersion,
    level,
    tempLevelUpPoints,
    attackPoints,
    tempAttackPoints,
    defencePoints,
    tempDefencePoints,
    lifePoints,
    tempLifePoints,
    addPoints,
    saveConfig
  } = props;
  return (
    <div className="monsterConfig">
      <h2>Monster name: {name}</h2>
      <ChangeButtonDisplay
        gameMode={gameMode}
        methood={generateNewName}
        name={"generateNewName"}
        text={"Generate new name"}
      />
      {gameMode === "Preconfig" ? <p>Please customize your Moonster</p> : ""}
      <div className="look">
        <ChangeButtonDisplay
          gameMode={gameMode}
          methood={changeCounter}
          name={"prev"}
          text={"<"}
        />
        <img src={"./img/" + monsterImg[lookVersion]} className="look" />
        <ChangeButtonDisplay
          gameMode={gameMode}
          methood={changeCounter}
          name={"next"}
          text={">"}
        />
      </div>
      <StatsDisplay
        gameMode={gameMode}
        name={"Level"}
        staticValue={level}
        tempValue={0}
      />
      {gameMode === "Preconfig" ? (
        <StatsDisplay
          gameMode={gameMode}
          name={"Points to spend"}
          staticValue={0}
          tempValue={tempLevelUpPoints}
        />
      ) : (
        ""
      )}
      <div className="stats">
        <ChangeButtonDisplay
          gameMode={gameMode}
          methood={addPoints}
          name={"removeAttackPoints"}
          text={"-"}
          c={"remove"}
          dataFunc={"remove"}
        />
        <StatsDisplay
          gameMode={gameMode}
          name={"Attack"}
          staticValue={attackPoints}
          tempValue={tempAttackPoints}
        />
        <ChangeButtonDisplay
          gameMode={gameMode}
          methood={addPoints}
          name={"addAttackPoints"}
          text={"+"}
          c={"add"}
          dataFunc={"add"}
        />
      </div>
      <div className="stats">
        <ChangeButtonDisplay
          gameMode={gameMode}
          methood={addPoints}
          name={"removeDefencePoints"}
          text={"-"}
          c={"remove"}
          dataFunc={"remove"}
        />
        <StatsDisplay
          gameMode={gameMode}
          name={"Defence"}
          staticValue={defencePoints}
          tempValue={tempDefencePoints}
        />
        <ChangeButtonDisplay
          gameMode={gameMode}
          methood={addPoints}
          name={"addDefencePoints"}
          text={"+"}
          c={"add"}
          dataFunc={"add"}
        />
      </div>
      <div className="stats">
        <ChangeButtonDisplay
          gameMode={gameMode}
          methood={addPoints}
          name={"removeLifePoints"}
          text={"-"}
          c={"remove"}
          dataFunc={"remove"}
        />
        <StatsDisplay
          gameMode={gameMode}
          name={"Life points"}
          staticValue={lifePoints}
          tempValue={tempLifePoints}
        />
        <ChangeButtonDisplay
          gameMode={gameMode}
          methood={addPoints}
          name={"addLifePoints"}
          text={"+"}
          c={"add"}
          dataFunc={"add"}
        />
      </div>
      <ChangeButtonDisplay
        gameMode={gameMode}
        methood={saveConfig}
        name={"saveConfig"}
        text={"Save config"}
      />
    </div>
  );
};

export default MonsterConfigDisplay;
