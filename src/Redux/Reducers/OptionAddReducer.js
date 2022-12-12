import { OPTION_ADD_SUCCESS, OPTION_ADD_ERROR, OPTION_ADD_REQUEST, OPTION_ADD_RESET } from "../Actions/actionTypes"
const intialstate = { isLoading: false, isSuccess: false, isError: false }

const optionAddReducer = (state = intialstate, action) => {
  if (action.type === OPTION_ADD_REQUEST) {
    return {
      ...state, isLoading: true
    }
  }
  else if (action.type === OPTION_ADD_SUCCESS) {
    return { isLoading: false, isError: false, isSuccess: true }
  }
  else if (action.type === OPTION_ADD_ERROR) {
    return {
      isLoading: false, isSuccess: false, isError: true
    }
  }
  else if (action.type === OPTION_ADD_RESET) {
    return intialstate
  }
  return state
}
export default optionAddReducer