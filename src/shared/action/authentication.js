import { createAction } from 'redux-actions'

export const ADD_USER_TO_STATE = 'auth/ADD_USER_TO_STATE'
export const REMOVE_ITEM_FROM_STATE = 'auth/REMOVE_ITEM_FROM_STATE'

export const addUserToState = createAction(ADD_USER_TO_STATE)
export const removeItemFromState = createAction(REMOVE_ITEM_FROM_STATE)
