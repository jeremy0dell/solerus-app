import remove from 'lodash/remove'

import {
  ADD_USER_TO_STATE,
  REMOVE_ITEM_FROM_STATE,
} from '../action/authentication'

const initialState = {
  isLoggedIn: false,
  user: null,
}

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_TO_STATE:
      return {
        isLoggedIn: true,
        user: action.payload,
      }
    case REMOVE_ITEM_FROM_STATE: //eslint-disable-line
      const removed = remove(state.user.ownership, itm => itm._id.toString() === action.payload)
      console.log('removed is', removed)
      return state
    default:
      return state
  }
}

export default authenticationReducer
