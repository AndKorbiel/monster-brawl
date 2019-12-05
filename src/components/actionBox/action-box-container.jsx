import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionBoxDisplay from './action-box-display'

class ActionBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1,
        }
    }

    calcAttack = () => {
        const { userAttackPoints, } = this.props;
    };

    render() {
        const { round } = this.state;
        const { gameMode } = this.props;

        let instruction;

        if (gameMode === "Preconfig") {
            instruction = "Please configure your Monster"
        } else {
            instruction = "Prepare for brawl...!"
        }

        return (
            <ActionBoxDisplay gameMode={gameMode} instruction={instruction} round={round} />
        )
    }
}

const select = (state) => {
    return {
        gameMode: state.gameMode,
        userAttackPoints: state.monsterConfig.attackPoints,
        userDefencePoints: state.monsterConfig.defencePoints,
        userLifePoints: state.monsterConfig.lifePoints,
        cpuAttackPoints: state.cpuMonsterConfig.attackPoints,
        cpuDefencePoints: state.cpuMonsterConfig.defencePoints,
        cpuLifePoints: state.cpuMonsterConfig.lifePoints,
    }
};

export default connect(select,)(ActionBox);
