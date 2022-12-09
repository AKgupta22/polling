import { POLL_LIST_SUCCESS, POLL_LIST_ERROR, POLL_LIST_REQUEST,POLL_LIST_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: [] }

const pollFetchReducer = (state = intialstate, action) => {
  if (action.type === POLL_LIST_REQUEST) {
    return {
      ...state, isLoading: true
    }
  }
  else if (action.type === POLL_LIST_SUCCESS) {
    return { isLoading: false, isError: false, isSuccess: true, data: [...action.payload.data.reverse()] }
  }
  else if (action.type === POLL_LIST_ERROR) {
    return {
      isLoading: false, isSuccess: false, isError: true, data: []
    }
  }
  else if (action.type === POLL_LIST_RESET) {
    return intialstate
  }
  return state
}
export default pollFetchReducer