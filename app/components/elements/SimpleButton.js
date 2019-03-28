import React, { Component } from 'react'
import { Animated, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import InteractableTile from './InteractableTile'
import CustomIcon from '../icons/CustomIcon'
import { defaultIconColor } from '../../utils/colorConstants'

const inactiveColor = 'rgba(255, 255, 255, 0.0)'
const activeColor = 'rgba(255, 255, 255, 1.0)'

export default class SimpleButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: null, iconColor: defaultIconColor }
    this._colorValue = new Animated.Value(0)
  }

  render() {
    const interpolatedColor = this._calculateInterpolatedColor()
    return (
      <InteractableTile onPress={this._onPressContainerHandle}>
        <Animated.View style={[{ backgroundColor: interpolatedColor }, styles.buttonContainer]}>
          <CustomIcon
            name={this.props.name}
            size={this.props.size}
            color={this.state.iconColor}
            style={[styles.icon, this.props.style || {}]}
          />
        </Animated.View>
      </InteractableTile>
    )
  }

  _onPressContainerHandle = () => {
    if (!this.props.interactable) {
      return
    }
    this.setState({ isActive: !this.state.isActive }, () => {
      this._colorValue.setValue(0)
      Animated.timing(this._colorValue, {
        toValue: 100,
        duration: 250
      }).start(finished => {
        if (finished) {
          this.setState({ iconColor: this.state.isActive ? this.props.iconActiveColor : defaultIconColor })
        }
      })
    })
  }

  _calculateInterpolatedColor = () => {
    if (this.state.isActive === null) {
      return inactiveColor
    } else {
      return this._colorValue.interpolate({
        inputRange: [0, 100],
        outputRange: this.state.isActive ? [inactiveColor, activeColor] : [activeColor, inactiveColor]
      })
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    margin: 19
  }
})
