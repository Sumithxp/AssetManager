import React, { Component } from "react";
import LoggedOut from "./src/screens/LoggedOut";
import LoginScreen from "./src/screens/Login";
import HomeScreen from "./src/screens/Home";
import QRScreen from "./src/screens/ScanQR";
import AddScreen from "./src/screens/Upsert";
import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import common from './src/style/common.style';

const AppNavigator = createStackNavigator({
  login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  home: HomeScreen,
  qr: QRScreen,
  add: AddScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppContainer />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: "red"
  }
});
