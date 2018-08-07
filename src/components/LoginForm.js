import React from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends React.Component{
    render() {
        const {email, password, error} = this.props;
        const {errorTextStyle} = styles;
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={password}
                    />
                </CardSection>

                <Text style={errorTextStyle}>{error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner/>
        }

        return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;

        this.props.loginUser({email, password});
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, user, error, loading} = auth;
    return {
        email,
        password,
        user,
        error,
        loading
    };
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser}) (LoginForm);

const styles = {
    errorTextStyle: {
         fontSize: 20,
         alignSelf: 'center',
         color: 'red'
    }
};