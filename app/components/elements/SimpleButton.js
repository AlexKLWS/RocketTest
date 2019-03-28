import React, { Component } from 'react'
import { Animated, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import InteractableTile from './InteractableTile'
import CustomIcon from '../icons/CustomIcon'
import { defaultIconColor } from '../../utils/colorConstants'

export default class SimpleButton extends Component {
  constructor(props) {
    super(props)
    this.state = { isActive: null }
  }

  render() {
    return (
      <InteractableTile>
          <View style={styles.buttonContainer}>
            <CustomIcon
              name={this.props.name}
              size={this.props.size}
              color={this.state.isActive ? this.props.activeIconColor : defaultIconColor}
              style={[styles.icon, this.props.style || {}]}
            />
          </View>
      </InteractableTile>
    )
  }

  _onPressContainerHandle = () => {}
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
