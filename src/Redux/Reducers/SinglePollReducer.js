import { SINGLE_POLL_SUCCESS, SINGLE_POLL_ERROR, SINGLE_POLL_REQUEST } from '../Actions/actionTypes'
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const SinglePollReducer = (state = intialstate, action) => {
    if (action.type === SINGLE_POLL_REQUEST) {
        return {
            ...state, isLoading: true
        }
    }
    else if (action.type === SINGLE_POLL_SUCCESS) {
        return { isLoading: false, isError: false, isSuccess: true, data: { ...action.payload.data } }
    }
    else if (action.type === SINGLE_POLL_ERROR) {
        return {
            isLoading: false, isSuccess: false, isError: true, data: {...action.payload}
        }
    }
    return state
}
export default SinglePollReducer