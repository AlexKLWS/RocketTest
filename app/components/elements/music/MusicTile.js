import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import InteractableTile from '../InteractableTile'
import CustomIcon from '../../icons/CustomIcon'
import { connectionsGreen, connectionsBlue, connectionsOrange } from '../../../utils/colorConstants'
import { MUSIC_TILE_ID } from '../../../utils/elementsIds'

export default class MusicTile extends Component {
  render() {
    return (
      <InteractableTile
        ref={component => {
          this.interactableTileRef = component
        }}
        isExpandable={true}
        rowId={this.props.rowId}
        elementId={MUSIC_TILE_ID}
      >
        <Text style={styles.songTitle}>All Star</Text>
        <Text style={styles.artist}>Smash Mouth</Text>
        <View style={styles.controlsContainer}>
          <CustomIcon name="Forward" size={17} color="rgba(255, 255, 255, 0.4)" style={styles.rewind} />
          <TouchableOpacity onPressIn={this.onPressInContainerHandle} onPressOut={this.onPressOutContainerHandle}>
            <CustomIcon name="Play" size={29} color="#FFF" />
          </TouchableOpacity>
          <CustomIcon name="Forward" size={17} color="rgba(255, 255, 255, 0.4)" style={styles.forward} />
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
  songTitle: {
    textAlign: 'center',
    fontSize: 17,
    color: '#FFF',
    fontWeight: '600',
    paddingTop: 3
  },
  artist: {
    fontSize: 17,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.3)'
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 24
  },
  rewind: {
    transform: [{ rotate: '180deg' }],
    paddingLeft: 24,
    paddingRight: 16
  },
  play: {},
  forward: {
    paddingLeft: 20,
    paddingRight: 18
  }
})
