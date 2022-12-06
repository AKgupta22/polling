import { REGISTRATION_SUCCESS, REGISTRATION_ERROR, REGISTRATION_REQUEST } from '../Actions/actionTypes'


const loading = {
    error: "loading",
    data: {}
}
const UserReducer = (state = {}, action) => {

    if (action.type === REGISTRATION_REQUEST) {
        return loading
    }
    else if (action.type === REGISTRATION_SUCCESS) {
        return action.payload
    }
    else if (action.type === REGISTRATION_ERROR) {
        return action.payload
    }
    return state
}
export default UserReducer