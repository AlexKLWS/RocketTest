import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import SimpleButton from './SimpleButton'
import ScreenMirrorTile from './screenMirror/ScreenMirrorTile'
import {
  selectedOrientationLockColor,
  selectedNightModeColor
} from '../../utils/colorConstants'

export default class MiddleRow extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.row}>
            <SimpleButton
              name="Orientation-Lock"
              size={32}
              interactable={true}
              iconActiveColor={selectedOrientationLockColor}
            />
            <SimpleButton
              name="Night-Mode"
              size={25}
              style={{ paddingHorizontal: 4, paddingVertical:3.5 }}
              interactable={true}
              iconActiveColor={selectedNightModeColor}
            />
          </View>
          <ScreenMirrorTile />
        </View>
        <SimpleButton name="Calculator" size={32} style={{ padding: 5 }} />
        <SimpleButton name="Camera" size={25} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  column: {
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
})
