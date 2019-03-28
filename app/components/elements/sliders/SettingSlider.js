import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState
} from 'react-native'
import InteractableTile from '../InteractableTile'
import CustomIcon from '../../icons/CustomIcon'
import { sliderIconColor } from '../../../utils/colorConstants'

const initialValue = 0
const min = 0
const max = 100

export default class SettingSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      barHeight: null,
      deltaValue: 0,
      value: initialValue
    }
  }

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (_, gestureState) => this.onMove(gestureState),
    onPanResponderRelease: () => this.onEndMove(),
    onPanResponderTerminate: () => {}
  })

  onMove(gestureState) {
    const { barHeight } = this.state
    const newDeltaValue = this.getValueFromBottomOffset(-gestureState.dy, barHeight, min, max)

    this.setState({
      deltaValue: newDeltaValue
    })
  }

  onEndMove() {
    const { value, deltaValue } = this.state
    this.setState({ value: value + deltaValue, deltaValue: 0 })
  }

  onBarLayout = event => {
    const { height: barHeight } = event.nativeEvent.layout
    this.setState({ barHeight })
  }

  getValueFromBottomOffset = (offset, barHeight, rangeMin, rangeMax) => {
    if (barHeight === null) return 0
    return ((rangeMax - rangeMin) * offset) / barHeight
  }

  getBottomOffsetFromValue = (value, rangeMin, rangeMax, barHeight) => {
    if (barHeight === null) return 0
    const valueOffset = value - rangeMin
    const totalRange = rangeMax - rangeMin
    const percentage = valueOffset / totalRange
    return barHeight * percentage
  }

  render() {
    return (
      <InteractableTile>
        <View style={styles.container}>
          <View style={[styles.bar, { height: this.props.initialHeight || 80 }]}>
            <CustomIcon name={this.props.name} size={this.props.iconSize} color={sliderIconColor} style={this.props.iconStyle || styles.icon} />
          </View>
        </View>
      </InteractableTile>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  bar: {
    backgroundColor: '#FFF',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  icon: {
    paddingHorizontal: 19,
    paddingBottom: 17
  }
})
