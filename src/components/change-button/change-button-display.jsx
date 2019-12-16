import React from 'react';

const ChangeButtonDisplay = (props) => {
    const { gameMode, name, methood, text, dataFunc, disabled } = props;
    const $changeButton =
        gameMode === "Pre-config" ? (
            <button name={name} onClick={methood} data-func={dataFunc} disabled={disabled}>
                {text}
            </button>
        ) : (
            ""
        );

    return (
        <div>
            {$changeButton}
        </div>
    )
};

export default ChangeButtonDisplay;
