import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import InteractableTile from '../InteractableTile'
import CustomIcon from '../../icons/CustomIcon'

export default class ScreenMirrorTile extends Component {
  render() {
    return (
      <InteractableTile>
        <View style={styles.container}>
          <CustomIcon name="AirPlay" size={22} color="#FFF" style={styles.icon} />
          <Text style={styles.label}>{'Screen\nMirroring'}</Text>
        </View>
      </InteractableTile>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 15
  },
  label: {
    textAlign: 'left',
    fontSize: 13,
    lineHeight: 17,
    color: '#FFF'
  },
  icon: {
    paddingRight: 11,
    paddingTop: 1
  }
})
