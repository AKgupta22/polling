import { call, put, takeEvery } from "@redux-saga/core/effects";
import { POLL_DEL_REQUEST } from '../Actions/actionTypes'
import { pollDelSuccess, pollDelError } from '../Actions'
import FetchApi from '../API/FetchApi'


function* PollDelData({ payload }) {
    const query = `delete_poll?id=${payload.id}`
    try {
        const response = yield call(FetchApi, query, payload.token)
        if (response.data.error === 0)
            yield put(pollDelSuccess())
        else
            yield put(pollDelError(response.data))
    }
    catch (error) {
        const data = {
            data: 'Internal Server Error'
        }
        yield put(pollDelError(data))
    }

}

function* pollDelSaga() {
    yield takeEvery(POLL_DEL_REQUEST, PollDelData)
}
export default pollDelSaga;