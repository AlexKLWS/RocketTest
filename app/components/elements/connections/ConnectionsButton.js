import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Animated } from 'react-native'
import CustomIcon from '../../icons/CustomIcon'
import { connectionsDefault } from '../../../utils/colorConstants'

export default class ConnectionsButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: null }
    this._colorValue = new Animated.Value(0)
  }

  render() {
    const interpolatedColor = this._calculateInterpolatedColor()
    return (
      <TouchableWithoutFeedback
        onPressIn={this._onPressInHandle}
        onPressOut={this._onPressOutHandle}
        onPress={this._onPressHandle}
      >
        <Animated.View style={[{ backgroundColor: interpolatedColor }, styles.button]}>
          <CustomIcon name={this.props.name} size={this.props.size} color="#FFF" style={this.props.style || {}} />
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  _onPressHandle = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      this._colorValue.setValue(0)
      Animated.timing(this._colorValue, {
        toValue: 100,
        duration: 250,
        useNativeDriver: true
      }).start()
    })
  }

  _onPressInHandle = () => {
    this.props.onPressInContainerHandle()
  }

  _onPressOutHandle = () => {
    this.props.onPressOutContainerHandle()
  }

  _calculateInterpolatedColor = () => {
    if(this.state.isActive === null) {
      return connectionsDefault
    } else {
    return this._colorValue.interpolate({
      inputRange: [0, 100],
      outputRange: this.state.isActive
        ? [connectionsDefault, this.props.activeColor]
        : [this.props.activeColor, connectionsDefault]
    })
  }
  }
}

const styles = StyleSheet.create({
  button: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
    margin: 7.5
  }
})