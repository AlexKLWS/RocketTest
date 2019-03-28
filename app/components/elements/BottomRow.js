import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import SimpleButton from './SimpleButton'
import { selectedFlashLightColor } from '../../utils/colorConstants'

export default class BottomRow extends Component {
  render() {
    return (
      <View style={styles.row}>
        <SimpleButton
          name="Flash-Light"
          size={34}
          style={{ paddingHorizontal: 9 }}
          interactable={true}
          iconActiveColor={selectedFlashLightColor}
        />
        <SimpleButton name="Timer" size={32} />
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
  }
})
