import { applyMiddleware, createStore } from "redux";
import AllReducer from './Reducers'
import createSagaMiddleware from 'redux-saga'
import RegisterSaga from './Saga/UserAdd'
import LoginSaga from './Saga/UserLogin'
import PollFetchSaga from './Saga/PollFetch'
import PollAddSaga from './Saga/PollAdd'
import pollDelSaga from './Saga/PollDelete'
import singlePollFetchSaga from './Saga/SinglePoll'
import PollEditSaga from './Saga/PollEdit'
import logger from 'redux-logger'
const sagaMiddleware = createSagaMiddleware()

const MyStore = createStore(AllReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(RegisterSaga)
sagaMiddleware.run(LoginSaga)
sagaMiddleware.run(PollFetchSaga)
sagaMiddleware.run(PollAddSaga)
sagaMiddleware.run(pollDelSaga)
sagaMiddleware.run(singlePollFetchSaga)
sagaMiddleware.run(PollEditSaga)

export default MyStore