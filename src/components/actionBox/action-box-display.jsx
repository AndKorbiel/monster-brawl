import React from "react";

const ActionBoxDisplay = props => {
  const {
    gameMode,
    instruction,
    round,
    attack,
    displayAttack,
    currentTurn,
    userTempDefencePoints,
    userTempLifePoints,
    cpuTempDefencePoints,
    cpuTempLifePoints,
    startBrawl
  } = props;

  return (
    <div className="actionBox">
      <h1>{gameMode}</h1>
      <h2>{instruction}</h2>
      <h3>Round: {round}</h3>
      <button onClick={startBrawl}>Start brawl</button>
      <button onClick={attack}>Attack!</button>
      <h4>
        {currentTurn} attacks for: {displayAttack}
      </h4>
      <div className="row">
        <div className="col-md-6">
          <p>Player</p>
          <p>Defence: {userTempDefencePoints}</p>
          <p>Life: {userTempLifePoints}</p>
        </div>
        <div className="col-md-6">
          <p>CPU</p>
          <p>Defence: {cpuTempDefencePoints}</p>
          <p>Life: {cpuTempLifePoints}</p>
        </div>
      </div>
    </div>
  );
};

export default ActionBoxDisplay;
