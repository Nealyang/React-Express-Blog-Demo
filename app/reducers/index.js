import {reducer as home} from './homeReducer'
import {combineReducers} from 'redux'
const initialState={
    isFetching:false,
    errMsg:'',
    userInfo:{}
};

export const actionsTypes = {
    FETCH_START:"FETCH_START",
    FETCH_END:"FETCH_END",
    FETCH_ERROR:"FETCH_ERROR",
    USER_LOGIN:"USER_LOGIN",
    USER_REGISTER:"USER_REGISTER",
    RESPONSE_USER_INFO:"RESPONSE_USER_INFO"
};

export const actions = {
    fetch_start:function () {
        return{
            type:actionsTypes.FETCH_START
        }
    },
    fetch_end:function () {
        return{
            type:actionsTypes.FETCH_END
        }
    },
    fetch_error:function (msg) {
        return{
            type:actionsTypes.FETCH_ERROR,
            msg:msg
        }
    },
    get_login:function (username, password) {
        return{
            type:actionsTypes.USER_LOGIN,
            username,
            password
        }
    },
    get_register:function (username,password,repassword) {
        return{
            type:actionsTypes.USER_REGISTER,
            password,
            username,
            repassword
        }
    },
    responseUserInfo:function (data) {
        return{
            type:actionsTypes.RESPONSE_USER_INFO,
            data:data
        }
    }
};

export function reducer (state=initialState,action){
    switch (action.type){
        case actionsTypes.FETCH_START:
            return{
                ...state,isFetching:true
            };
        case actionsTypes.FETCH_END:
            return{
                ...state,isFetching:false
            };
        case actionsTypes.FETCH_ERROR:
            return{
                isFetching:false,
                errMsg:action.msg
            };
        case actionsTypes.RESPONSE_USER_INFO:
            return{
                ...state,userInfo:action.data
            };
        default:
            return state
    }
}

const front = combineReducers({
   home
});
const admin = combineReducers({

});

export default combineReducers({
    front,
    globalState:reducer,
    admin
})


