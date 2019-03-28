import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import expandedTileState from './app/redux/reducers'
import MainScreen from './app/components/screens/MainScreen'

const store = createStore(expandedTileState, {})

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    )
  }
}
