import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //middleware
import reducers from './reducers';
import RouterComponent from './Router';

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
                <RouterComponent />
            </Provider>
        );
    }
}

export default App;
