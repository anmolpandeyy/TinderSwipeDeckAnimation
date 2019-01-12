import React, { Component } from "react";
import { View, Text, StyleSheet, Animated, PanResponder,Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width
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
    const rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"]
    });
    return {
      ...this.position.getLayout(),
      transform: [{ rotate }]
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
