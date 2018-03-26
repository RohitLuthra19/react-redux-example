import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    userLogin(e) {
        this.props.onLogin(this.props.email, this.props.password);
        e.preventDefault();
    }
    render() {
        return (<div>Login</div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogin: (username, password) => {          // dispatch1: () =>
            dispatch(login(username, password));    // dispatch(actionCreators);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);