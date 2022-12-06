import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from "./actionTypes"
import { createAction } from "redux-actions"

export const registrationRequest = createAction(REGISTRATION_REQUEST)
export const registrationSuccess = createAction(REGISTRATION_SUCCESS)
export const registrationError = createAction(REGISTRATION_ERROR)