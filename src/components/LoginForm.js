import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        //action creator 'passwordChanged'
        this.props.passwordChanged(text);
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='email@email.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = state => {
    //check 'reducers/indes.js' file for state names
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

// '{ action }' - is mandatory to put in '{' otherwise it will be not a function
export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);

