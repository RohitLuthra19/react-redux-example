import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Dashboard from './Dashboard';

class Application extends Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Dashboard />
        } else {
            return <Login />
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

export default connect(mapStateToProps)(Application);