import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import { withNavigation } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
        <AppContain navigation={this.props.navigation}/>
    );
  }
}

const AssessmentNavigator = createStackNavigator({
  LoginScreen:LoginScreen,
  RegisterScreen:RegisterScreen,
  HomeScreen:HomeScreen,
});
const AppContain = createAppContainer(AssessmentNavigator);

AppRegistry.registerComponent('repobsession', () => App);
