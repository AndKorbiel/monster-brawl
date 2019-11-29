import React from 'react';

const ChangeButton = (props) => {
    const { gameMode, name, methood, text, dataFunc } = props;
    const $changeButton =
        gameMode === "Preconfig" ? (
            <button name={name} onClick={methood} data-func={dataFunc}>
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

export default ChangeButton;
