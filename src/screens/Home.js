import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import NextArrowButton from '../widgets/NextArrowButton';
import colors from '../style/color';
import common from "../style/common.style.js";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  onPress = () => {
    this.props.navigation.push("qr");
  };

  render() {
    return (
      <View style={common.wrapper}>
        <View style={styles.homewrapper}>
          <View style={styles.btnwrapper}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.btn}
              onPress={this.onPress}
            >
              <Text style={styles.btntext}>Inspection</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.btn}
              onPress={this.onPress}
            >
              <Text style={styles.btntext}>Batch Inspection</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.btn}
              onPress={this.onPress}
            >
              <Text style={styles.btntext}>Search Assets</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <NextArrowButton onPress={this.onPress} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homewrapper: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  btnwrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: colors.white,
    width: 200,
    height: 100,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40
  },
  btntext: {
    fontSize: 18,
    fontWeight: "400",
    color: "#454747"
  },
});
