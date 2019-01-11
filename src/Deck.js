import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, PanResponder } from "react-native";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {}
    });
  }

  getCardStyle = () => {
    return {
      ...this.position.getLayout(),
      transform: [{ rotate: "45deg" }]
    };
  };

  renderCards = () => {
    const { data, renderCard } = this.props;
    return data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
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
