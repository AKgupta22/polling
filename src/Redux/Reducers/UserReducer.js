import { REGISTRATION_SUCCESS, REGISTRATION_ERROR, REGISTRATION_REQUEST, LOGIN_FALSE } from '../Actions/actionTypes'

const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const UserReducer = (state = intialstate, action) => {
    if (action.type === REGISTRATION_REQUEST) {
        return {
            ...state, isLoading: true
        }
    }
    else if (action.type === REGISTRATION_SUCCESS) {
        return { isLoading: false, isError: false, isSuccess: true, data: { ...action.payload } }
    }
    else if (action.type === REGISTRATION_ERROR) {
        return {
            isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
        }
    }
    else if (action.type === LOGIN_FALSE) {
        return intialstate
    }
    return state
}
export default UserReducer