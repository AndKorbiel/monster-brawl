import React from "react";

const ActionBoxDisplay = props => {
  const {
    round,
    attack,
      userAttackPoints,
    userTempDefencePoints,
    userTempLifePoints,
      cpuAttackPoints,
    cpuTempDefencePoints,
    cpuTempLifePoints,
    startBrawl,
      actionLog
  } = props;

  return (
    <div className="actionBox">
        <h3>Round: {round}</h3>
      <button onClick={startBrawl}>Start brawl</button>
      <button onClick={attack}>Attack!</button>
        <div>
            {actionLog.map(el => <p>{el}</p>)}
        </div>
      <div className="row">
        <div className="col-md-6">
          <p>Player</p>
            <p>Attack: {userAttackPoints}</p>
          <p>Defence: {userTempDefencePoints}</p>
          <p>Life: {userTempLifePoints}</p>
        </div>
        <div className="col-md-6">
          <p>CPU</p>
            <p>Attack: {cpuAttackPoints}</p>
          <p>Defence: {cpuTempDefencePoints}</p>
          <p>Life: {cpuTempLifePoints}</p>
        </div>
      </div>
    </div>
  );
};

export default ActionBoxDisplay;
