import { POLL_SUCCESS, POLL_ERROR, POLL_REQUEST,POLL_FALSE } from '../Actions/actionTypes'
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: [] }

const PollFetchReducer = (state = intialstate, action) => {
    if (action.type === POLL_REQUEST) {
        return {
            ...state, isLoading: true
        }
    }
    else if (action.type === POLL_SUCCESS) {
        return { isLoading: false, isError: false, isSuccess: true, data: [...action.payload.data.reverse()] }
    }
    else if (action.type === POLL_ERROR) {
        return {
            isLoading: false, isSuccess: false, isError: true, data: []
        }
    }
    else if (action.type === POLL_FALSE) {
        return intialstate
    }
    return state
}
export default PollFetchReducer