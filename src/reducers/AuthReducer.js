import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.data};ß
        case PASSWORD_CHANGED:
            return {...state, password: action.data};
        case LOGIN_USER:
            return {...state, loading: true, error: ''}
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.data};
        case LOGIN_USER_FAIL:
            return {...state, error: action.data.message, loading: false, password: ''}
        default:
            return state;
    }
}