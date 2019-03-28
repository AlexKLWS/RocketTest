import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Animated, Easing, LayoutAnimation } from 'react-native'

export default class InteractableTile extends Component {
  constructor(props) {
    super(props)
    this.state = { isExpanded: false }
    this.scaleValue = new Animated.Value(1)
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInHandle}
        onPressOut={this.onPressOutHandle}
        onPress={this._onPressHandle}
      >
        <Animated.View style={this._calculateStyles()}>{this.props.children}</Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  _onPressHandle = () => {
    if (this.props.onPress) {
      this.props.onPress()
    }
    if (this.props.isExpandable && !this.state.isExpanded) {
      this.setState({ isExpanded: true })
    }
  }

  onShrink = () => {
    if (this.props.isExpandable && this.state.isExpanded) {
      this.setState({ isExpanded: false })
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

  _calculateStyles = () => {
    if (!this.state.isExpanded) {
      return [{ transform: [{ scale: this.scaleValue }] }, styles.normalTile]
    } else {
      return styles.expandedTile
    }
  }
}

const styles = StyleSheet.create({
  normalTile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 18,
    overflow: 'hidden',
    margin: 7
  },
  expandedTile: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 36,
    overflow: 'hidden',
    width: 321,
    height: 355,
    marginTop: -178,
    marginLeft: -161
  }
})
