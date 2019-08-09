import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';
import colors from "../style/color";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class NextArrowButton extends Component {
  render() {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight style={[{ opacity: 0.6 }, styles.button]}>
          <Icon
            name="angle-right"
            color={colors.green01}
            size={32}
            style={styles.icon}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20,
    paddingTop: 0
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: colors.white
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});
