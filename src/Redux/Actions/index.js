import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_FALSE, POLL_REQUEST, POLL_SUCCESS, POLL_ERROR } from "./actionTypes"
import { POLL_ADD_REQUEST, POLL_ADD_SUCCESS, POLL_ADD_ERROR, POLL_ADD_FALSE } from './actionTypes'
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
export const pollAddRequest = createAction(POLL_ADD_REQUEST)
export const pollAddSuccess = createAction(POLL_ADD_SUCCESS)
export const pollAddError = createAction(POLL_ADD_ERROR)
export const pollAddFalse = createAction(POLL_ADD_FALSE)