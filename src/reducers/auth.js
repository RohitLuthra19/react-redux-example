const defaultState = {
    isLoggedIn: false,
    email: '',
    password: ''
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
        console.log(action);
            return Object.assign({}, state, {
                isLoggedIn: true,
                email: action.email,
                password: action.password
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLoggedIn: false,
                email: '',
                password: ''
            });
        default:
            return state;
    }
}