import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div> {`Welcome ${this.props.username}`}</div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        email: state.auth.email
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogout: () => {
            dispatch(logout());
        }
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(Dashboard);