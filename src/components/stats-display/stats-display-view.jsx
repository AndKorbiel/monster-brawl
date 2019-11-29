import React from 'react';

const StatsDisplay = (props) => {
    const { gameMode, name, staticValue, tempValue } = props;
    const $statsDisplay =
        gameMode === "Preconfig" ? (
            <p>{name}: {staticValue + tempValue}</p>
        ) : (
            <p>{name}: {staticValue}</p>
        );
    return (
        <React.Fragment>{$statsDisplay}</React.Fragment>
    )
};

export default StatsDisplay;
