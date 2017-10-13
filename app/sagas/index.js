import {fork, call} from 'redux-saga/effects'
import {loginFlow, registerFlow, user_auth} from './homeSaga'
import {get_all_users_flow} from './adminManagerUsersSaga'
import {getAllTagsFlow, addTagFlow, delTagFlow} from './adminManagerTagsSaga'

export default function* rootSaga() {
    yield  fork(loginFlow);
    yield  fork(registerFlow);
    yield  fork(user_auth);
    yield fork(get_all_users_flow);
    yield fork(getAllTagsFlow);
    yield fork(addTagFlow);
    yield fork(delTagFlow);
}
