import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableOpacity, Slider } from 'react-native'
import InteractableTile from '../InteractableTile'
import CustomIcon from '../../icons/CustomIcon'
import { defaultIconColor } from '../../../utils/colorConstants'
import { MUSIC_TILE_ID } from '../../../utils/elementsIds'

const mapStateToProps = state => ({
  expandedElementId: state.elementId
})

@connect(mapStateToProps)
export default class MusicTile extends Component {
  render() {
    const isExpanded = this.props.expandedElementId === MUSIC_TILE_ID
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
        <View style={isExpanded ? styles.controlsContainerExpanded : styles.controlsContainer}>
          <CustomIcon
            name="Forward"
            size={isExpanded ? 26 : 17}
            color="rgba(255, 255, 255, 0.4)"
            style={styles.rewind}
          />
          <TouchableOpacity onPressIn={this.onPressInContainerHandle} onPressOut={this.onPressOutContainerHandle}>
            <CustomIcon
              name="Play"
              size={isExpanded ? 38 : 29}
              color={defaultIconColor}
              style={isExpanded ? styles.playExpanded : {}}
            />
          </TouchableOpacity>
          <CustomIcon
            name="Forward"
            size={isExpanded ? 26 : 17}
            color="rgba(255, 255, 255, 0.4)"
            style={styles.forward}
          />
        </View>
        {isExpanded && (
          <View style={styles.volumeSliderContainer}>
            <CustomIcon name="Less-Volume" size={17} color="rgba(255, 255, 255, 0.4)" />
            <Slider
              minimumTrackTintColor="#FFF"
              maximumTrackTintColor="rgba(255, 255, 255, 0.2)"
              style={styles.slider}
            />
            <CustomIcon name="Volume" size={22} color="rgba(255, 255, 255, 0.4)" />
          </View>
        )}
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
  controlsContainerExpanded: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80
  },
  rewind: {
    transform: [{ rotate: '180deg' }],
    paddingLeft: 24,
    paddingRight: 16
  },
  playExpanded: {
    paddingHorizontal: 40
  },
  forward: {
    paddingLeft: 20,
    paddingRight: 18
  },
  slider: {
    width: 150,
    marginHorizontal: 15
  },
  volumeSliderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 85
  }
})
