import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'; //
//import propTypes from 'props-types';
import colors from '../style/color';

export default class RoundButton extends Component {
  render() {
    const { text, textColor, background } = this.props;
    const backgroundColor = background || 'transparent';
    const color = textColor || color.black;
    return (
      <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}>
        <Text style={[{ color }, styles.buttonText]}>{text}</Text>
      </TouchableHighlight>
    );
  }
}
// RoundButton.propTypes = {
//   text: propTypes.string.isRequired
// };

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    display: 'flex',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white,
  },
  buttonText: {
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
  },
});
