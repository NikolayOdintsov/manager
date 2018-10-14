import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMPLOYEE_UPDATE} from './types';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();

    //No need in 'redux-thung' 'dispatch' as we don't care about response.
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            //Actions.pop() - to just return without 'Back' button
            .then(() => Actions.pop());
    };
};
