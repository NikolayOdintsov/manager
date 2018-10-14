import {EMAIL_CHANGED} from '../actions/types';

const INITIAL_STATE = {email: ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            /**
             * NOTE: creating new object is vital!! state should be Immutable!!
             * dot thing here is 'Create new object and take all props from the src object and put them into the new object,
             * and set value of 'email' with value'.
             */
            return {...state, email: action.payload};
        default:
            return state;
    }
};