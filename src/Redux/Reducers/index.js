import UserReducer from './UserReducer'
import LoginReducer from './LoginReducer'
import { combineReducers } from 'redux'
const AllReducers = combineReducers({
   UserReducer,
   LoginReducer
})
export default AllReducers