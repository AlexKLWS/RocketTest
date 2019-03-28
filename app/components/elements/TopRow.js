import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, LayoutAnimation } from 'react-native'
import ConnectionsTile from '../elements/connections/ConnectionsTile'
import MusicTile from '../elements/music/MusicTile'
import { TOP_ROW_ID } from '../../utils/rowIds'
import { CONNECTIONS_TILE_ID, MUSIC_TILE_ID } from '../../utils/elementsIds'

const mapStateToProps = state => ({
  expandedElementId: state.elementId
})

@connect(mapStateToProps)
export default class TopRow extends Component {
  render() {
    const { expandedElementId } = this.props
    return (
      <View style={styles.row}>
        {expandedElementId !== MUSIC_TILE_ID && <ConnectionsTile rowId={TOP_ROW_ID} />}
        {expandedElementId !== CONNECTIONS_TILE_ID && <MusicTile rowId={TOP_ROW_ID} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})
