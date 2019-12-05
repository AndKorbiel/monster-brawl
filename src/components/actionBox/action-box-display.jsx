import React from "react";

const ActionBoxDisplay = props => {
  const { gameMode, instruction, round, attack, displayAttack } = props;

  return (
    <div className="actionBox">
      <h1>{gameMode}</h1>
      <h2>{instruction}</h2>
      <h3>Round: {round}</h3>
      <button onClick={attack}>Attack!</button>
      <h4>{displayAttack}</h4>
    </div>
  );
};

export default ActionBoxDisplay;
