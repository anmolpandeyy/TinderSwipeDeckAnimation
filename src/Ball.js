import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 300, y: 500 },
    }).start();
  }
  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
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
