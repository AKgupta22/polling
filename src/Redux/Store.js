import { applyMiddleware, createStore } from "redux";
import AllReducer from './Reducers'
import createSagaMiddleware from 'redux-saga'
import RegisterSaga from './Saga/UserAdd'
import logger from 'redux-logger'
const sagaMiddleware = createSagaMiddleware()

const MyStore = createStore(AllReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(RegisterSaga)
export default MyStore