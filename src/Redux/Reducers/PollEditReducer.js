import { POLL_EDIT_REQUEST, POLL_EDIT_SUCCESS, POLL_EDIT_ERROR, POLL_EDIT_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const PollEditReducer = (state = intialstate, action) => {
  if (action.type === POLL_EDIT_REQUEST) {
    return {
      ...state, isLoading: true
    }
  }
  else if (action.type === POLL_EDIT_SUCCESS) {
    return { isLoading: false, isError: false, isSuccess: true, data: {} }
  }
  else if (action.type === POLL_EDIT_ERROR) {
    return {
      isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
    }
  }
  else if (action.type === POLL_EDIT_RESET) {
    return intialstate
  }
  return state
}
export default PollEditReducer