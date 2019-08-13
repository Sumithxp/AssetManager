import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../style/color';
import common from '../style/common.style.js';
export default class ScanQR extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={common.wrapper}>
        <Text>S</Text>
      </View>
    );
  }
}
