import {combineReducers} from 'redux'
export const actionTypes = {
    ADMIN_URI_LOCATION:"ADMIN_URI_LOCATION"
};

const initialState = {
    url:"/"
};

export const actions = {
    change_location_admin:function (url) {
        return{
            type:actionTypes.ADMIN_URI_LOCATION,
            data:url
        }
    }
};

export function reducer(state=initialState,action) {
    switch (action.type){
        case actionTypes.ADMIN_URI_LOCATION:
            return action.data;
        default:
            return state
    }
}

const admin = combineReducers({
    adminGlobalState:reducer
});

export default admin

