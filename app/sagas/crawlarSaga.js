import {take,put,call} from 'redux-saga/effects'
import {get, post} from '../fetch/fetch'
import {actionsTypes as IndexActionTypes} from '../reducers'
import {actionTypes as CrawlarActionTypes} from '../reducers/crawlarReducer'

export function* getCrawlarDatas() {
  yield put({type: IndexActionTypes.FETCH_START});
  try {
      return yield call(get, '/crawlar/getCrawlarInfo');
  } catch (err) {
      yield put({type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0});
  } finally {
      yield put({type: IndexActionTypes.FETCH_END})
  }
}

export function* getCrawlarDatasFlow() {
  while (true) {
      let request = yield take(CrawlarActionTypes.GET_DATAS);
      let response = yield call(getCrawlarDatas);
      if(response&&response.code === 0){
          yield put({type:IndexActionTypes.SET_MESSAGE,msgContent:'爬取成功!',msgType:1});
      }
  }
}
