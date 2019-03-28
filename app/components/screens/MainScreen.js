import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import TopRow from '../elements/TopRow'
import BottomRow from '../elements/BottomRow'
import MiddleRow from '../elements/MiddleRow'

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.elementsHolder}>
          <TopRow />
          <MiddleRow />
          <BottomRow />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.0)'
  },
  elementsHolder: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.0)'
  }
})
