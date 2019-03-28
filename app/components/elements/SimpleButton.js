import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import InteractableTile from './InteractableTile'
import CustomIcon from '../icons/CustomIcon'

export default class SimpleButton extends Component {
  render() {
    return (
      <InteractableTile
        ref={component => {
          this.interactableTileRef = component
        }}
      >
        <View style={styles.buttonContainer}>
          <CustomIcon name={this.props.name} size={this.props.size} color="#FFF" style={this.props.style || {}} />
        </View>
      </InteractableTile>
    )
  }

  onPressInContainerHandle = () => {
    if (this.interactableTileRef) {
      this.interactableTileRef.onPressInHandle()
    }
  }

  onPressOutContainerHandle = () => {
    if (this.interactableTileRef) {
      this.interactableTileRef.onPressOutHandle()
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 18,
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
})
