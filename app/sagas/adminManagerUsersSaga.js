import {put, take, call, select} from 'redux-saga/effects'
import {get} from '../fetch/fetch'
import {actionsTypes as IndexActionTypes} from '../reducers'
import {actionTypes as ManagerUserActionTypes} from '../reducers/adminManagerUser'


export function* fetch_users(pageNum) {
    yield put({type: IndexActionTypes.FETCH_START});
    try {
        return yield call(get, `/admin/getUsers?pageNum=${pageNum}`);
    } catch (err) {
        yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
    } finally {
        yield put({type: IndexActionTypes.FETCH_END})
    }
}

export function* get_all_users_flow() {
    while (true) {
        let request = yield take(ManagerUserActionTypes.GET_ALL_USER);
        let pageNum = request.pageNum||1;
        let response = yield call(fetch_users,pageNum);
        if(response&&response.code === 0){
            for(let i = 0;i<response.data.list.length;i++){
                response.data.list[i].key = i;
            }
            let data = {};
            data.total = response.data.total;
            data.list  = response.data.list;
            data.pageNum = Number.parseInt(pageNum);
            yield put({type:ManagerUserActionTypes.RESOLVE_GET_ALL_USERS,data:data})
        }else{
            yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:response.message,msgType:0});
        }
    }
}