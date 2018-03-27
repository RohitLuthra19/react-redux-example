import history from '../helpers/history';
import { userService } from '../services/user.service';

export const login = (email, password) => {
    /* return {
        type: 'LOGIN',
        email: email,
        password: password
    }; */
    console.log(email);
    return dispatch => {
        setTimeout(() => {
            if (email === 'admin@quark.com' && password === 'password') {
                dispatch({
                    type: 'LOGIN',
                    email: email,
                    password: password
                });
            }
            console.log(email);
        }, 3000);
        /* userService.login(email, password)
            .then(
                user => {
                    dispatch({
                        type: 'LOGIN',
                        isLoggedIn: true
                    });
                    history.push('/dashboard');
                },
                error => {
                    dispatch({
                        type: 'LOGIN',
                        isLoggedIn: false
                    });
                }
            ); */
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}