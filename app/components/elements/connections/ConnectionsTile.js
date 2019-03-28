import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import InteractableTile from '../InteractableTile'
import ConnectionsButton from './ConnectionsButton'
import { connectionsGreenColor, connectionsBlueColor, connectionsOrangeColor } from '../../../utils/colorConstants'

export default class ConnectionsTile extends Component {
  render() {
    return (
      <InteractableTile
        ref={component => {
          this.interactableTileRef = component
        }}
        isExpandable={true}
        onPress={this._onTilePress}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <ConnectionsButton
              name="Aeroplane-Mode"
              size={22}
              style={{ paddingLeft: 3 }}
              activeColor={connectionsOrangeColor}
              onPressInContainerHandle={this.onPressInContainerHandle}
              onPressOutContainerHandle={this.onPressOutContainerHandle}
            />
            <ConnectionsButton
              name="Carrier"
              size={26}
              style={{ paddingLeft: 1 }}
              activeColor={connectionsGreenColor}
              onPressInContainerHandle={this.onPressInContainerHandle}
              onPressOutContainerHandle={this.onPressOutContainerHandle}
            />
          </View>
          <View style={styles.buttonRow}>
            <ConnectionsButton
              name="Wifi"
              size={19}
              activeColor={connectionsBlueColor}
              onPressInContainerHandle={this.onPressInContainerHandle}
              onPressOutContainerHandle={this.onPressOutContainerHandle}
            />
            <ConnectionsButton
              name="Bluetooth"
              size={26}
              activeColor={connectionsBlueColor}
              onPressInContainerHandle={this.onPressInContainerHandle}
              onPressOutContainerHandle={this.onPressOutContainerHandle}
            />
          </View>
        </View>
      </InteractableTile>
    )
  }

  _onTilePress = () => {
    if (this.props.onExpand) {
      this.props.onExpand()
    }
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

  onShrink = () => {
    if (this.interactableTileRef) {
      this.interactableTileRef.onShrink()
    }
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  buttonRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.0)'
  }
})
