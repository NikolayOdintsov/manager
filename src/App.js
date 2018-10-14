import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //middleware
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
        //applyMiddleware - store enhancer
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }
}

export default App;
