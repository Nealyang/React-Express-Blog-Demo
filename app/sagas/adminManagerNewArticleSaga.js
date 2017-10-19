import {take, call, put,select} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionsTypes as IndexActionTypes} from '../reducers'
import {actionTypes as NewArticleActionTypes} from '../reducers/adminManagerNewArticle'

export function* saveArticle(data) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        let id = yield select(state=>state.admin.newArticle.id);
        if(id){
            data.id = id;
            return yield call(post, '/admin/article/updateArticle', data);
        }else{
            return yield call(post, '/admin/article/addArticle', data);
        }

    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* saveArticleFlow() {
    while (true) {
        let request = yield take(NewArticleActionTypes.SAVE_ARTICLE);
        if (request.data.title === '') {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请输入文章标题', msgType: 0});
        } else if (request.data.content === "") {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请输入文章内容', msgType: 0});
        } else if (request.data.tags.length === 0) {
            yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '请选择文章分类', msgType: 0});
        }
        if (request.data.title && request.data.content && request.data.tags.length > 0) {
            let res = yield call(saveArticle, request.data);
            if (res) {
                if (res.code === 0) {
                    yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 1});
                    setTimeout(function () {
                        location.replace('/admin/managerArticle');
                    }, 1000);
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
    }
}