import { POLL_ADD_SUCCESS, POLL_ADD_ERROR, POLL_ADD_REQUEST, POLL_ADD_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false }

const PollAddReducer = (state = intialstate, action) => {
  if (action.type === POLL_ADD_REQUEST) {
    return {
      ...state, isLoading: true
    }
  }
  else if (action.type === POLL_ADD_SUCCESS) {
    return { isLoading: false, isError: false, isSuccess: true }
  }
  else if (action.type === POLL_ADD_ERROR) {
    return {
      isLoading: false, isSuccess: false, isError: true
    }
  }
  else if (action.type === POLL_ADD_RESET) {
    return intialstate
  }
  return state
}
export default PollAddReducer