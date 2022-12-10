import { all } from "redux-saga/effects"
import RegisterSaga from "./UserAdd"
import LoginSaga from "./UserLogin"
import pollFetchSaga from "./PollFetch"
import PollAddSaga from "./PollAdd"
import pollDelSaga from "./PollDelete"
import singlePollFetchSaga from "./SinglePoll"
import pollEditSaga from "./PollEdit"
import VoteSaga from "./DoVote"

const allSaga = [RegisterSaga(), LoginSaga(), pollFetchSaga(), PollAddSaga(), pollDelSaga(), singlePollFetchSaga(), pollEditSaga(), VoteSaga()]
function* rootSaga() {
  yield all(allSaga)
}

export default rootSaga