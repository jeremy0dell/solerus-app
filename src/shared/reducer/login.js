import { CHANGE_LOGIN_INPUT_VALUE } from '../action/login'

const initialState = {
  email: '',
  password: '',
}

export default (state = initialState, action) => {
  const { type, name, value } = action
  switch (type) {
    case CHANGE_LOGIN_INPUT_VALUE:
      console.log('change', action, name, value)
      return state
    default:
      return state
  }
}
