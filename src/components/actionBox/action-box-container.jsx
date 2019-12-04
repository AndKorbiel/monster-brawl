import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionBoxDisplay from './action-box-display'

class ActionBox extends Component {
    render() {
        const { gameMode } = this.props;
        return (
            <ActionBoxDisplay gameMode={gameMode} />
        )
    }
}

const select = (state) => {
    return {
        gameMode: state.gameMode
    }
};

export default connect(select,)(ActionBox);
