import omit from 'lodash/omit'

// eslint-disable-next-line no-unused-vars
import User from './model/user'

export const populateUser = (user) => {
  if (user) {
    return {
      authentication: {
        isLoggedIn: true,
        user: omit(user, 'password'),
      },
    }
  }
  return null
}

export const homePage = () => null

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})
