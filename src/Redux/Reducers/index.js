import UserReducer from './UserReducer'
import LoginReducer from './LoginReducer'
import PollFetchReducer from './PollFetchReducer'
import PollAddReducer from './PollAddReducer'
import PollDelReducer from './PollDeleteReducer'
import SinglePollReducer from './SinglePollReducer'
import PollEditReducer from './PollEditReducer'

import { combineReducers } from 'redux'
const AllReducers = combineReducers({
   UserReducer,
   LoginReducer,
   PollFetchReducer,
   PollAddReducer,
   PollDelReducer,
   SinglePollReducer,
   PollEditReducer
})
export default AllReducers