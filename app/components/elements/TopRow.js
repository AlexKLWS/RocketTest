import React, { Component } from 'react'
import { StyleSheet, View, LayoutAnimation } from 'react-native'
import ConnectionsTile from '../elements/connections/ConnectionsTile'
import MusicTile from '../elements/music/MusicTile'
import { TOP_ROW_ID } from '../../utils/rowIds'

export default class TopRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isConnectionsTileExpanded: false,
      isMusicTileExpanded: false
    }
  }

  render() {
    const { isConnectionsTileExpanded, isMusicTileExpanded } = this.state
    return (
      <View style={styles.row}>
        {!isMusicTileExpanded && (
          <ConnectionsTile
            onExpand={this._onConnectionsTileExpanded}
            ref={component => {
              this._tempConnectionsRef = component
            }}
          />
        )}
        {!isConnectionsTileExpanded && (
          <MusicTile
            onExpand={this._onMusicTileExpanded}
            ref={component => {
              this._tempMusicRef = component
            }}
          />
        )}
      </View>
    )
  }

  onComponentShrink = () => {
    this.setState({ isConnectionsTileExpanded: false, isMusicTileExpanded: false })
    if (this._tempConnectionsRef) {
      this._tempConnectionsRef.onShrink()
    }
    if (this._tempMusicRef) {
      this._tempMusicRef.onShrink()
    }
  }

  _onConnectionsTileExpanded = () => {
    if (this.props.onCurrentRowElementExpand) {
      this.props.onCurrentRowElementExpand(TOP_ROW_ID)
    }
    this.setState({ isConnectionsTileExpanded: true })
  }

  _onMusicTileExpanded = () => {
    if (this.props.onCurrentRowElementExpand) {
      this.props.onCurrentRowElementExpand(TOP_ROW_ID)
    }
    this.setState({ isMusicTileExpanded: true })
  }
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})
