export const CHANGE_LOGIN_INPUT_VALUE = 'login/CHANGE_LOGIN_INPUT_VALUE'

// eslint-disable-next-line
export const changeLoginInputValue = (name, value) => ({
  type: CHANGE_LOGIN_INPUT_VALUE,
  name,
  value,
})
