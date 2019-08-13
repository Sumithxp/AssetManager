import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import colors from "../style/color";

import InputField from '../widgets/InputField';
import NextArrowButton from '../widgets/NextArrowButton';
import common from "../style/common.style.js";
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  onPress = () => {
    this.props.navigation.push("home");
  };

  render() {
    return (
      <KeyboardAvoidingView style={common.wrapper} behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.logoWrapper}>
              <Image
                style={styles.logo}
                source={require('../img/logo-big-2.png')}
              />
            </View>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            />
          </ScrollView>
        </View>
        <NextArrowButton onPress={this.onPress} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    padding: 20,
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
});
