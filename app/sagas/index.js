import {fork,call} from 'redux-saga/effects'
import {loginFlow,registerFlow,user_auth} from './homeSaga'
export default function* rootSaga() {
    yield  fork(loginFlow);
    yield  fork(registerFlow);
    yield  fork(user_auth)
}
