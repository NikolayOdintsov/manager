import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
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
                        placeholder='password'/>
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
        email: state.auth.email
    };
};

// '{ action }' - is mandatory to put in '{' otherwise it will be not a function
export default connect(mapStateToProps, {emailChanged})(LoginForm);

