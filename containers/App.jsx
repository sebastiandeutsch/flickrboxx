import 'babel-core/polyfill';
import React from 'react'
import FlickrBoxxApp from 'containers/FlickrBoxxApp'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from 'reducers'

const reducer = combineReducers(reducers)
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer)

export default class App {
  render() {
    return (
      <Provider store={store}>
        {() => <FlickrBoxxApp />}
      </Provider>
    )
  }
}
