import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);

    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === {prop: 'name', value: 'Jane'}
            //JS6 key interpolation trick -> [action.payload.prop]: action.payload.value
            return {...state, [action.payload.prop]: action.payload.value};
        //This is just to clear the form
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}
