import { POLL_SUCCESS, POLL_ERROR, POLL_REQUEST } from '../Actions/actionTypes'
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: [] }

const PollFetchReducer = (state = intialstate, action) => {
    if (action.type === POLL_REQUEST) {
        return {
            ...state, isLoading: true
        }
    }
    else if (action.type === POLL_SUCCESS) {
        return { isLoading: false, isError: false, isSuccess: true, data: [...action.payload.data] }
    }
    else if (action.type === POLL_ERROR) {
        return {
            isLoading: false, isSuccess: false, isError: true, data: []
        }
    }
    return state
}
export default PollFetchReducer