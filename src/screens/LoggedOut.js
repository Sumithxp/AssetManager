import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import colors from '../style/color';
import RoundButton from "../widgets/RoundButton";
export default class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('../img/logo-big-2.png')}
          />
          <Text style={styles.welcomeText}>welcome</Text>
          <RoundButton
            text="Connect to Facebook"
            textColor={colors.green01}
            backgroundColor={colors.white}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
});
