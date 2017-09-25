const initialState = {
    list: [],
    pageNum: '1'
};
export const actionTypes = {
    'GET_ALL_USER': "GET_ALL_USER",
    'RESOLVE_GET_ALL_USERS': "RESOLVE_GET_ALL_USERS"
};

export const actions = {
    get_all_users: function () {
        return {
            type: actionTypes.GET_ALL_USER
        }
    }
};

export function users(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESOLVE_GET_ALL_USERS:
            return {
                ...state, list: action.data.list, currentPage: action.data.pageNum
            };
        default:
            return state;

    }
}