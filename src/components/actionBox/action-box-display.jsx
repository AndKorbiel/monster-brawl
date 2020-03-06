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
      actionLog
  } = props;

  return (
      <div className="actionBox">
          <h3>{round === 0 ? "Start the fight" : "Round: " + round}</h3>
          <button className="btn-lg" onClick={attack}>Play next round</button>
          <div className="row display-stats">
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
          <div className="action-log">
              {actionLog.map(el => <p>{el}</p>)}
          </div>
      </div>
  );
};

export default ActionBoxDisplay;
