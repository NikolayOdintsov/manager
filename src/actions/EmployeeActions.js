import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();

    //No need in 'redux-thung' 'dispatch' as we don't care about response.
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            //Actions.pop() - to just return without 'Back' button
            .then(() => {
                dispatch({type: EMPLOYEE_CREATE});
                Actions.pop();
            });
    };
};

export const employeesFetch = () => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            });
    };
};


export const employeeSave = ({name, phone, shift, uid}) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({name, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_SAVE_SUCCESS});
                Actions.pop();
            });
    };
};

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.pop();
            });
    };
};
