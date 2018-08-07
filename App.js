/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import {Header} from './src/components/common';
import LoginForm from './src/components/LoginForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDdcQ2ojfBnYSXstf7eUhPKQsgogAcTpeU',
      authDomain: 'manager-cfd84.firebaseapp.com',
      databaseURL: 'https://manager-cfd84.firebaseio.com',
      projectId: 'manager-cfd84',
      storageBucket: 'manager-cfd84.appspot.com',
      messagingSenderId: '144057215431'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header>Manager App</Header>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
