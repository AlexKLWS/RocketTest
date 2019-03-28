import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableWithoutFeedback, Animated, Easing, LayoutAnimation } from 'react-native'
import { setTileIsExpanded } from '../../redux/actions'
import { layoutAnimationConfig } from '../../utils/layoutAnimationConfig'

const mapStateToProps = state => ({
  isExpanded: state.expanded,
  expandedElementId: state.elementId
})

const mapDispatchToProps = dispatch => ({
  setTileIsExpanded: (rowId, elementId) => dispatch(setTileIsExpanded(rowId, elementId))
})

class InteractableTile extends Component {
  constructor(props) {
    super(props)
    this.scaleValue = new Animated.Value(1)
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.onPressInHandle}
        onPressOut={this.onPressOutHandle}
        onPress={this._onPressHandle}
      >
        <Animated.View style={this._calculateStyles()}>{this.props.children}</Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  _onPressHandle = () => {
    if (this.props.onPress) {
      this.props.onPress()
    }
    if (this.props.isExpandable && this.props.expandedElementId !== this.props.elementId) {
      LayoutAnimation.configureNext(layoutAnimationConfig)
      this.props.setTileIsExpanded(this.props.rowId, this.props.elementId)
    }
  }

  onPressInHandle = () => {
    this._startAnimation(true)
  }

  onPressOutHandle = () => {
    this._startAnimation(false)
  }

  _startAnimation = expand => {
    Animated.spring(this.scaleValue, {
      toValue: expand ? 1.1 : 1,
      speed: 14,
      useNativeDriver: true
    }).start()
  }

  _calculateStyles = () => {
    if (this.props.expandedElementId && this.props.expandedElementId === this.props.elementId) {
      return styles.expandedTile
    } else {
      return [{ transform: [{ scale: this.scaleValue }] }, styles.normalTile]
    }
  }
}

const styles = StyleSheet.create({
  normalTile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 18,
    overflow: 'hidden',
    margin: 7
  },
  expandedTile: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 36,
    overflow: 'hidden',
    width: 321,
    height: 355,
    marginTop: -178,
    marginLeft: -161
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(InteractableTile)
