import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Ball extends Component {
  render() {
    return <View style={styles.ball} />;
  }
}
export default Ball;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  ball: {
    height: 60,
    width: 60,
    borderWidth: 30,
    borderRadius: 30,
    borderColor: "black"
  }
});
