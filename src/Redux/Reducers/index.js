import UserReducer from './UserReducer'
import LoginReducer from './LoginReducer'
import PollFetchReducer from './PollFetchReducer'
import PollAddReducer from './PollAddReducer'

import { combineReducers } from 'redux'
const AllReducers = combineReducers({
   UserReducer,
   LoginReducer,
   PollFetchReducer,
   PollAddReducer
})
export default AllReducers