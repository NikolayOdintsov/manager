import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

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
            /**
             * NOTE: creating new object is vital!! state should be Immutable!!
             * dot thing here is 'Create new object and take all props from the src object and put them into the new object,
             * and set value of 'email' with value'.
             */
            return {...state, email: action.payload};

        case PASSWORD_CHANGED:
            return {...state, password: action.payload};

        case LOGIN_USER:
            return {...state, loading: true, error: ''};

        case LOGIN_USER_SUCCESS:
            /**
             * ...INITIAL_STATE  -> create new object of state + fill in values with INITIAL_STATE
             */
            return {...state, ...INITIAL_STATE, user: action.payload};

        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication failed.', loading: false, password: ''};

        default:
            return state;
    }
};
