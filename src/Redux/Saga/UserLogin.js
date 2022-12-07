import { call, put, takeEvery } from "@redux-saga/core/effects";
import { LOGIN_REQUEST } from '../Actions/actionTypes'
import { loginSuccess, loginError } from '../Actions'
import FetchApi from '../API/FetchApi'
import jwt_decode from "jwt-decode";


function* LoginData({ payload }) {
    const query = `login?username=${payload.username}&password=${payload.password}`
    try {
        const response = yield call(FetchApi, query)
        const decoded = jwt_decode(response.data.token)
        if (response.data.error === 0)
            yield put(loginSuccess({ ...response.data, decoded }))
        else
            yield put(loginError(response.data))
    }
    catch (error) {
        yield put(loginError(error))
    }

}

function* LoginSaga() {
    yield takeEvery(LOGIN_REQUEST, LoginData)
}
export default LoginSaga;