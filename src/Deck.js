import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

class Deck extends Component {
  renderCards = () => {
    const { data, renderCard } = this.props;
    return data.map(item => {
      return renderCard(item);
    });
  };
  render() {
    return <View>{this.renderCards()}</View>;
  }
}
export default Deck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
