import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Animated, Easing } from 'react-native'

export default class InteractableTile extends Component {
  constructor(props) {
    super(props)
    this.scaleValue = new Animated.Value(1)
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInHandle}
        onPressOut={this.onPressOutHandle}
        onPress={this._onPressHandle}
      >
        <Animated.View style={[{ transform: [{ scale: this.scaleValue }] }, styles.tile]}>
          {this.props.children}
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  _onPressHandle = () => {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  onPressInHandle = () => {
    this._startAnimation(true)
  }

  onPressOutHandle = () => {
    this._startAnimation(false)
  }

  _startAnimation = expand => {
    Animated.spring(this.scaleValue, {
      toValue: expand ? 1.1 : 1,
      speed: 14,
      useNativeDriver: true
    }).start()
  }
}

const styles = StyleSheet.create({
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 18,
    overflow: 'hidden',
    margin: 7
  }
})
