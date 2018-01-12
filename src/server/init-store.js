// @flow

import Immutable from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'
import loginReducer from '../shared/reducer/login'

import combinedReducers from '../shared/reducer'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
    preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.hello))
  }

  if (plainPartialState && plainPartialState.login) {
    // flow-disable-next-line
    preloadedState.login = Object.assign(
      {},
      loginReducer(undefined, {}),
      plainPartialState.login,
    )
  }

  return createStore(combinedReducers,
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
