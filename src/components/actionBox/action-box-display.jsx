import React from 'react';

const ActionBoxDisplay =(props)=> {
    const {gameMode} = props;
    return (
        <div className="actionBox">
            <h1>{gameMode}</h1>
        </div>
    )
};

export default ActionBoxDisplay;
