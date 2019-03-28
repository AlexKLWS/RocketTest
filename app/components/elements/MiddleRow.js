import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import SimpleButton from './SimpleButton'
import ScreenMirrorTile from './screenMirror/ScreenMirrorTile'

export default class MiddleRow extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={styles.row}>
            <SimpleButton name="Orientation-Lock" size={32} />
            <SimpleButton name="Night-Mode" size={25} style={{ paddingHorizontal: 4 }}/>
          </View>
          <ScreenMirrorTile />
        </View>
        <SimpleButton name="Calculator" size={32} style={{ paddingHorizontal: 5 }} />
        <SimpleButton name="Camera" size={25} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.0)'
  },
  column: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.0)'
  }
})
