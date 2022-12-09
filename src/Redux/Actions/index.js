import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_FALSE, POLL_REQUEST, POLL_SUCCESS, POLL_ERROR, POLL_FALSE } from "./actionTypes"
import { POLL_ADD_REQUEST, POLL_ADD_SUCCESS, POLL_ADD_ERROR, POLL_ADD_FALSE } from './actionTypes'
import { POLL_DEL_REQUEST, POLL_DEL_SUCCESS, POLL_DEL_ERROR } from './actionTypes'
import { SINGLE_POLL_REQUEST, SINGLE_POLL_SUCCESS, SINGLE_POLL_ERROR } from './actionTypes'
import { POLL_EDIT_REQUEST, POLL_EDIT_SUCCESS, POLL_EDIT_ERROR, POLL_EDIT_FALSE } from './actionTypes'


import { createAction } from "redux-actions"

export const registrationRequest = createAction(REGISTRATION_REQUEST)
export const registrationSuccess = createAction(REGISTRATION_SUCCESS)
export const registrationError = createAction(REGISTRATION_ERROR)
export const loginRequest = createAction(LOGIN_REQUEST)
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginError = createAction(LOGIN_ERROR)
export const loginFalse = createAction(LOGIN_FALSE)
export const pollRequest = createAction(POLL_REQUEST)
export const pollSuccess = createAction(POLL_SUCCESS)
export const pollError = createAction(POLL_ERROR)
export const pollFalse = createAction(POLL_FALSE)
export const pollAddRequest = createAction(POLL_ADD_REQUEST)
export const pollAddSuccess = createAction(POLL_ADD_SUCCESS)
export const pollAddError = createAction(POLL_ADD_ERROR)
export const pollAddFalse = createAction(POLL_ADD_FALSE)
export const pollDelRequest = createAction(POLL_DEL_REQUEST)
export const pollDelSuccess = createAction(POLL_DEL_SUCCESS)
export const pollDelError = createAction(POLL_DEL_ERROR)
export const singlePollRequest = createAction(SINGLE_POLL_REQUEST)
export const singlePollSuccess = createAction(SINGLE_POLL_SUCCESS)
export const singlePollError = createAction(SINGLE_POLL_ERROR)
export const pollEditRequest = createAction(POLL_EDIT_REQUEST)
export const pollEditSuccess = createAction(POLL_EDIT_SUCCESS)
export const pollEditError = createAction(POLL_EDIT_ERROR)
export const pollEditFalse = createAction(POLL_EDIT_FALSE)