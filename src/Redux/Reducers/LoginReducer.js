import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_FALSE } from '../Actions/actionTypes'
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const LoginReducer = (state = intialstate, action) => {
    if (action.type === LOGIN_REQUEST) {
        return {
            ...state, isLoading: true
        }
    }
    else if (action.type === LOGIN_SUCCESS) {
        return { isLoading: false, isError: false, isSuccess: true, data: { ...action.payload } }
    }
    else if (action.type === LOGIN_ERROR) {
        return {
            isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
        }
    }
    else if (action.type === LOGIN_FALSE) {
        return intialstate
    }
    return state
}
export default LoginReducer