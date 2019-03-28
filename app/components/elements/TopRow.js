import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ConnectionsTile from '../elements/connections/ConnectionsTile'
import MusicTile from '../elements/music/MusicTile'

export default class TopRow extends Component {
  render() {
    return (
      <View style={styles.row}>
        <ConnectionsTile />
        <MusicTile />
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
