import { ADD_USER_TO_STATE } from '../action/authentication'

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
    default:
      return state
  }
}

export default authenticationReducer
