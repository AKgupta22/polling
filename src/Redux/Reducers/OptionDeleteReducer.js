import {
  OPTION_DEL_SUCCESS,
  OPTION_DEL_ERROR,
  OPTION_DEL_REQUEST,
  OPTION_DEL_RESET,
} from "../Actions/actionTypes";
const intialstate = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  data: {},
};

const optionDelReducer = (state = intialstate, action) => {
  if (action.type === OPTION_DEL_REQUEST) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === OPTION_DEL_SUCCESS) {
    return { isLoading: false, isError: false, isSuccess: true };
  } else if (action.type === OPTION_DEL_ERROR) {
    return {
      isLoading: false,
      isSuccess: false,
      isError: true,
      data: { ...action.payload },
    };
  }
  else if (action.type === OPTION_DEL_RESET) {
    return intialstate
  }
  return state;
};
export default optionDelReducer;
