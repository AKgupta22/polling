import { VOTE_SUCCESS, VOTE_ERROR, VOTE_REQUEST, VOTE_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false, data: {} }

const voteReducer = (state = intialstate, action) => {
  if (action.type === VOTE_REQUEST) {
    return {
      ...state, isLoading: true
    }
  }
  else if (action.type === VOTE_SUCCESS) {
    return { isLoading: false, isError: false, isSuccess: true }
  }
  else if (action.type === VOTE_ERROR) {
    return {
      isLoading: false, isSuccess: false, isError: true, data: { ...action.payload }
    }
  }
  else if (action.type === VOTE_RESET) {
    return intialstate
  }
  return state
}
export default voteReducer