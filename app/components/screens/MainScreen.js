import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import TopRow from '../elements/TopRow'
import BottomRow from '../elements/BottomRow'
import MiddleRow from '../elements/MiddleRow'
import { layoutAnimationConfig } from '../../utils/layoutAnimationConfig'
import { TOP_ROW_ID, MIDDLE_ROW_ID, BOTTOM_ROW_ID } from '../../utils/rowIds'

export default class MainScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { currentRowId: null }
  }

  render() {
    const { currentRowId } = this.state
    return (
      <TouchableWithoutFeedback onPress={this._onRowElementShrink}>
        <View style={ styles.containerNormal}>
          <View style={styles.elementsHolder}>
            {(!currentRowId || currentRowId === TOP_ROW_ID) && (
              <TopRow
                ref={component => {
                  this._tempRef = component
                }}
                onCurrentRowElementExpand={this._onRowElementExpand}
              />
            )}
            {(!currentRowId || currentRowId === MIDDLE_ROW_ID) && (
              <MiddleRow onCurrentRowElementExpand={this._onRowElementExpand} />
            )}
            {(!currentRowId || currentRowId === BOTTOM_ROW_ID) && (
              <BottomRow onCurrentRowElementExpand={this._onRowElementExpand} />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _onRowElementExpand = rowId => {
    LayoutAnimation.configureNext(layoutAnimationConfig)
    this.setState({ currentRowId: rowId })
  }

  _onRowElementShrink = () => {
    if (!this.state.currentRowId || !this._tempRef) {
      return
    }
    //Конечно, в данной ситуации лучше воспользоваться Context API или redux или
    //другой подобной библиотекой
    LayoutAnimation.configureNext(layoutAnimationConfig)
    this.setState({ currentRowId: null })
    this._tempRef.onComponentShrink()
  }
}

const styles = StyleSheet.create({
  containerNormal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.0)'
  },
  containerExpanded: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.0)'
  },
  elementsHolder: {
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
})
