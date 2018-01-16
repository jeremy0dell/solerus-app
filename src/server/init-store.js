import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import authenticationReducer from '../shared/reducer/authentication'

import combinedReducers from '../shared/reducer'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.authentication) {
    // flow-disable-next-line
    preloadedState.authentication = Object.assign(
      {},
      authenticationReducer(undefined, {}),
      plainPartialState.authentication,
    )
  }

  return createStore(combinedReducers,
    preloadedState, applyMiddleware(thunkMiddleware))
}

export default initStore
