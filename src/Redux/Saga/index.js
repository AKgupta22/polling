import { all } from "redux-saga/effects"
import RegisterSaga from "./UserAdd"
import LoginSaga from "./UserLogin"
import pollFetchSaga from "./PollFetch"
import PollAddSaga from "./PollAdd"
import pollDelSaga from "./PollDelete"
import singlePollFetchSaga from "./SinglePoll"
import pollEditSaga from "./PollEdit"

const allSaga = [RegisterSaga(), LoginSaga(), pollFetchSaga(), PollAddSaga(), pollDelSaga(), singlePollFetchSaga(), pollEditSaga()]
function* rootSaga() {
      
  yield all(allSaga)
}

export default rootSaga