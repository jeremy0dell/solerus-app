// @flow

export const AUTH_USER = '/auth'
export const AUTH_ME = '/me'
export const AUTH_LOGOUT = '/logout'

export const USERS_INDEX = '/users'
export const USERS_TRANSFER = '/users/transfer'
export const USERS_SHOW = '/users/:id'
export const USERS_CREATE = '/users'
export const USERS_UPDATE = '/users/:id'
export const USERS_DELETE = '/users/:id'

export const PRODUCT_INDEX = '/products'
export const PRODUCT_SHOW = '/products/:id'

export const TRANSFER_INDEX = '/transfers'
export const TRANSFER_SHOW = '/transfers/:id'

export const ITEM_INDEX = '/items'
export const ITEM_SHOW = '/items/:id'

export const USERS_CONFIRMATION = '/confirmation/:token'
export const TOKEN_RESEND = '/resend'

export const HOME_PAGE_ROUTE = '/'
export const LOGIN_PAGE_ROUTE = '/login'
export const SIGNUP_PAGE_ROUTE = '/signup'
export const DASHBOARD_PAGE_ROUTE = '/dashboard'
export const DETAIL_PAGE_ROUTE = '/dashboard/:id' // item_id

export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
