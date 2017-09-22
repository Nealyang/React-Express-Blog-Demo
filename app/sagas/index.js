import {fork,call} from 'redux-saga/effects'
import {loginFlow,registerFlow} from './homeSaga'
export default function* rootSaga() {
    yield  fork(loginFlow);
    yield  fork(registerFlow)
}
