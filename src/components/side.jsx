import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {

    render() {
        const { name } = this.props;
        return (
            <div className="sidebar">
            <p>Hola! This is the global state: {name}</p>
            </div>
        )
    }
}

const select = state => {
    return {
        name: state.name
    }
};

export default connect(select)(Sidebar);
