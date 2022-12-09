import { POLL_DEL_SUCCESS, POLL_DEL_ERROR, POLL_DEL_REQUEST } from '../Actions/actionTypes'
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const PollDelReducer = (state = intialstate, action) => {
    if (action.type === POLL_DEL_REQUEST) {
        return {
            ...state, isLoading: true
        }
    }
    else if (action.type === POLL_DEL_SUCCESS) {
        return { isLoading: false, isError: false, isSuccess: true }
    }
    else if (action.type === POLL_DEL_ERROR) {
        return {
            isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
        }
    }
    return state
}
export default PollDelReducer