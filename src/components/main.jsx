import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName } from "../redux/actions/index";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWorking: true,
            localName: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { localName } = this.state;
        this.props.changeName(localName);
        this.setState({ localName: "" });
    };

    render() {
        const { localName } = this.state;

        return (
            <div className="main">
                <h1>Hello {this.props.name}</h1>
                <h2>Your localname is {localName}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={localName}
                        name="localName"
                        placeholder="Enter new name"
                        onChange={this.handleChange}
                    ></input>
                    <button type="submit">Click</button>
                </form>
            </div>
        );
    }
}

const select = state => {
    return {
        name: state.name
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeName: localName => { dispatch(changeName(localName))}
    }
};

export default connect(select, mapDispatchToProps)(Main);
