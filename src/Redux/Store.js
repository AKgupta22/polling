import { applyMiddleware, createStore } from "redux";
import AllReducer from './Reducers'
import createSagaMiddleware from 'redux-saga'
import RegisterSaga from './Saga/UserAdd'
import LoginSaga from './Saga/UserLogin'
import logger from 'redux-logger'
const sagaMiddleware = createSagaMiddleware()

const MyStore = createStore(AllReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(RegisterSaga)
sagaMiddleware.run(LoginSaga)
export default MyStore