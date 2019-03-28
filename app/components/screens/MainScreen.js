import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import TopRow from '../elements/TopRow'
import BottomRow from '../elements/BottomRow'
import MiddleRow from '../elements/MiddleRow'
import { setTileIsCollapsed } from '../../redux/actions'
import { layoutAnimationConfig } from '../../utils/layoutAnimationConfig'
import { TOP_ROW_ID, MIDDLE_ROW_ID, BOTTOM_ROW_ID } from '../../utils/rowIds'

const mapStateToProps = state => ({
  currentRowId: state.rowId
})

const mapDispatchToProps = dispatch => ({
  setTileIsCollapsed: () => dispatch(setTileIsCollapsed())
})

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class MainScreen extends Component {
  render() {
    const { currentRowId } = this.props
    return (
      <TouchableWithoutFeedback onPress={this._onRowElementShrink}>
        <View style={styles.containerNormal}>
          <View style={styles.elementsHolder}>
            {(!currentRowId || currentRowId === TOP_ROW_ID) && <TopRow />}
            {(!currentRowId || currentRowId === MIDDLE_ROW_ID) && <MiddleRow />}
            {(!currentRowId || currentRowId === BOTTOM_ROW_ID) && <BottomRow />}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _onRowElementShrink = () => {
    if (!this.props.currentRowId) {
      return
    }
    LayoutAnimation.configureNext(layoutAnimationConfig)
    this.props.setTileIsCollapsed()
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
