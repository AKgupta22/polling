import { call, put, takeEvery } from "@redux-saga/core/effects";
import { REGISTRATION_REQUEST } from '../Actions/actionTypes'
import { registrationSuccess, registrationError } from '../Actions'
import FetchApi from '../API/FetchApi'

function* RegisterData({ payload }) {
    const query = `add_user?username=${payload.username}&password=${payload.password}&role=${payload.username}`
    try {
        const data = yield call(FetchApi, query)
        if (data.error === 0)
            yield put(registrationSuccess(data))
        else
            yield put(registrationError(data))
    }
    catch (error) {
        yield put(registrationError(error))
    }

}

function* RegisterSaga() {
    yield takeEvery(REGISTRATION_REQUEST, RegisterData)
}
export default RegisterSaga;