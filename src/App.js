import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAXOvwxkvun2qP572wmsEKuNQzMsPvskEY',
            authDomain: 'manager-ea4a2.firebaseapp.com',
            databaseURL: 'https://manager-ea4a2.firebaseio.com',
            projectId: 'manager-ea4a2',
            storageBucket: 'manager-ea4a2.appspot.com',
            messagingSenderId: '1026892938538'
        };

        firebase.initializeApp(config);

    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{flex: 1}}>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }
}

export default App;
