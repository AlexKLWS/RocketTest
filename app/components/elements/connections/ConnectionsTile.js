import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native'
import InteractableTile from '../InteractableTile'
import ConnectionsButton from './ConnectionsButton'
import { connectionsGreenColor, connectionsBlueColor, connectionsOrangeColor } from '../../../utils/colorConstants'
import { CONNECTIONS_TILE_ID } from '../../../utils/elementsIds'

const mapStateToProps = state => ({
  expandedElementId: state.elementId
})

@connect(mapStateToProps)
export default class ConnectionsTile extends Component {
  render() {
    const isExpanded = this.props.expandedElementId === CONNECTIONS_TILE_ID
    return (
      <InteractableTile
        ref={component => {
          this.interactableTileRef = component
        }}
        isExpandable={true}
        rowId={this.props.rowId}
        elementId={CONNECTIONS_TILE_ID}
      >
        <View style={isExpanded ? styles.expandedButtonContainer : styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <View style={isExpanded ? styles.expandedButtonHolder : {}}>
              <ConnectionsButton
                name="Aeroplane-Mode"
                size={22}
                style={{ paddingLeft: 3 }}
                activeColor={connectionsOrangeColor}
                onPressInContainerHandle={this.onPressInContainerHandle}
                onPressOutContainerHandle={this.onPressOutContainerHandle}
              />
              {isExpanded && (
                <React.Fragment>
                  <Text style={styles.label}>Airplane Mode</Text>
                  <Text style={styles.label}>On/Off</Text>
                </React.Fragment>
              )}
            </View>
            <View style={isExpanded ? styles.expandedButtonHolder : {}}>
              <ConnectionsButton
                name="Carrier"
                size={26}
                style={{ paddingLeft: 1 }}
                activeColor={connectionsGreenColor}
                onPressInContainerHandle={this.onPressInContainerHandle}
                onPressOutContainerHandle={this.onPressOutContainerHandle}
              />
              {isExpanded && (
                <React.Fragment>
                  <Text style={styles.label}>Mobile Data</Text>
                  <Text style={styles.label}>On/Off</Text>
                </React.Fragment>
              )}
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={isExpanded ? styles.expandedButtonHolder : {}}>
              <ConnectionsButton
                name="Wifi"
                size={19}
                activeColor={connectionsBlueColor}
                onPressInContainerHandle={this.onPressInContainerHandle}
                onPressOutContainerHandle={this.onPressOutContainerHandle}
              />
              {isExpanded && (
                <React.Fragment>
                  <Text style={styles.label}>Wi-Fi</Text>
                  <Text style={styles.label}>On/Off</Text>
                </React.Fragment>
              )}
            </View>
            <View style={isExpanded ? styles.expandedButtonHolder : {}}>
              <ConnectionsButton
                name="Bluetooth"
                size={26}
                activeColor={connectionsBlueColor}
                onPressInContainerHandle={this.onPressInContainerHandle}
                onPressOutContainerHandle={this.onPressOutContainerHandle}
              />
              {isExpanded && (
                <React.Fragment>
                  <Text style={styles.label}>Bluetooth</Text>
                  <Text style={styles.label}>On/Off</Text>
                </React.Fragment>
              )}
            </View>
          </View>
          {isExpanded && (
            <View style={styles.buttonRow}>
              <View style={styles.expandedButtonHolder}>
                <ConnectionsButton
                  name="AirDrop"
                  size={24}
                  activeColor={connectionsBlueColor}
                  style={{ paddingLeft: 1 }}
                  onPressInContainerHandle={this.onPressInContainerHandle}
                  onPressOutContainerHandle={this.onPressOutContainerHandle}
                />
                <Text style={styles.label}>AirDrop</Text>
                <Text style={styles.label}>On/Off</Text>
              </View>
              <View
                style={{
                  paddingVertical: 5,
                  marginLeft: 27,
                  marginRight: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <ConnectionsButton
                  name="Hotspot"
                  size={16}
                  activeColor={connectionsBlueColor}
                  onPressInContainerHandle={this.onPressInContainerHandle}
                  onPressOutContainerHandle={this.onPressOutContainerHandle}
                />
                <Text style={styles.label}>Personal Hotspot</Text>
                <Text style={styles.label}>On/Off</Text>
              </View>
            </View>
          )}
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
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  expandedButtonContainer: {
    paddingVertical: 15,
    paddingRight: 2,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  expandedButtonHolder: {
    paddingVertical: 5,
    marginHorizontal: 32,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  buttonRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.0)'
  },
  label: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 11
  }
})
