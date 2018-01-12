import { combineReducers } from 'redux'

import login from './login'
import hello from './hello'

export default combineReducers({
  login,
  hello,
})
