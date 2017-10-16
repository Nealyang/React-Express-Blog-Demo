import {put, take, call, select} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionsTypes as IndexActionTypes} from '../reducers'
import {actionTypes as ManagerTagsTypes} from '../reducers/adminManagerTags'

export function* getAllTags() {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, '/getAllTags');
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* addTag(name) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(post, '/admin/tags/addTag', {name});
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* delTag(name) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, `/admin/tags/delTag?name=${name}`);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* getAllTagsFlow() {
    while (true) {
        yield take(ManagerTagsTypes.GET_ALL_TAGS);
        let res = yield call(getAllTags);
        if (res.code === 0) {
            let tempArr = [];
            for (let i = 0; i < res.data.length; i++) {
                tempArr.push(res.data[i].name)
            }
            yield put({type: ManagerTagsTypes.SET_TAGS, data: tempArr});
        } else if (res.message === '身份信息已过期，请重新登录') {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 1});
            setTimeout(function () {
                location.replace('/');
            }, 1000);
        } else {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 1});
        }
    }
}

export function* delTagFlow() {
    while (true){
        let req = yield take(ManagerTagsTypes.DELETE_TAG);
        let res = yield call(delTag,req.name);
        if (res.code === 0) {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 1});
            yield put({type:ManagerTagsTypes.GET_ALL_TAGS});
        } else if (res.message === '身份信息已过期，请重新登录') {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0});
            setTimeout(function () {
                location.replace('/');
            }, 1000);
        } else {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0});
        }
    }
}

export function* addTagFlow() {
    while (true) {
        let req = yield take(ManagerTagsTypes.ADD_TAG);
        let res = yield call(addTag, req.name);
        if (res.code === 0) {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 1});
            yield put({type:ManagerTagsTypes.GET_ALL_TAGS});
        }else if (res.message === '身份信息已过期，请重新登录') {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0});
            setTimeout(function () {
                location.replace('/');
            }, 1000);
        }  else {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0});
        }
    }
}
