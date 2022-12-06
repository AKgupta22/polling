import { REGISTRATION_SUCCESS, REGISTRATION_ERROR, REGISTRATION_REQUEST } from '../Actions/actionTypes'

const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const UserReducer = (state = intialstate, action) => {
    if (action.type === REGISTRATION_REQUEST) {
        return {
            ...state, isLoading: true
        }
    }
    else if (action.type === REGISTRATION_SUCCESS) {
        return { ...state, isLoading: false, data: { ...action.payload } }
    }
    else if (action.type === REGISTRATION_ERROR) {
        return {
            ...state, isLoading: false, isError: true, data: { ...action.payload }
        }
    }
    return state
}
export default UserReducer