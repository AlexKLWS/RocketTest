import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Animated } from 'react-native'
import CustomIcon from '../../icons/CustomIcon'
import { connectionsDefaultColor, defaultIconColor } from '../../../utils/colorConstants'

export default class ConnectionsButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: null }
    this._colorValue = new Animated.Value(0)
  }

  render() {
    const { name, size, style } = this.props
    const interpolatedColor = this._calculateInterpolatedColor()
    return (
      <TouchableWithoutFeedback
        onPressIn={this._onPressInHandle}
        onPressOut={this._onPressOutHandle}
        onPress={this._onPressHandle}
      >
        <Animated.View style={[{ backgroundColor: interpolatedColor }, styles.button]}>
          <CustomIcon name={name} size={size} color={defaultIconColor} style={style || {}} />
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  _onPressHandle = () => {
    this.setState({ isActive: !this.state.isActive }, () => {
      this._colorValue.setValue(0)
      Animated.timing(this._colorValue, {
        toValue: 100,
        duration: 250
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
    if (this.state.isActive === null) {
      return connectionsDefaultColor
    } else {
      return this._colorValue.interpolate({
        inputRange: [0, 100],
        outputRange: this.state.isActive
          ? [connectionsDefaultColor, this.props.activeColor]
          : [this.props.activeColor, connectionsDefaultColor]
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
