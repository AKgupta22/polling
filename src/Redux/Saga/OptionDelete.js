import { call, put, takeEvery } from "@redux-saga/core/effects";
import { OPTION_DEL_REQUEST } from "../Actions/actionTypes"
import { optionDelSuccess, optionDelError } from "../Actions"
import FetchApi from "../API/FetchApi"


function* optionDelData({ payload }) {
  const query = `delete_poll_option?id=${payload.id}&option_text=${payload.text}`
  try {
    const response = yield call(FetchApi, query, payload.token)
    if (response.data.error === 0)
      yield put(optionDelSuccess())
    else
      yield put(optionDelError(response))
  }
  catch (error) {
    const data = {
      data: "Internal Server Error"
    }
    yield put(optionDelError(data))
  }

}

function* optionDelSaga() {
  yield takeEvery(OPTION_DEL_REQUEST, optionDelData)
}
export default optionDelSaga;