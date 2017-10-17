const initialState = {
    articleList: [],
    pageNum: 1,
    total: 0
};

export const actionTypes = {
    ADMIN_GET_ARTICLE_LIST: 'ADMIN_GET_ARTICLE_LIST',
    ADMIN_RESPONSE_GET_ARTICLE_LIST: "ADMIN_RESPONSE_GET_ARTICLE_LIST",
    ADMIN_EDIT_ARTICLE: "ADMIN_EDIT_ARTICLE",
    ADMIN_DELETE_ARTICLE: "ADMIN_DELETE_ARTICLE",
};

export const actions = {
    get_article_list: function (pageNum = 1) {
        return {
            type: actionTypes.ADMIN_GET_ARTICLE_LIST,
            pageNum
        }
    },
    delete_article: function (id) {
        return {
            type: actionTypes.ADMIN_DELETE_ARTICLE,
            id
        }
    },
    edit_article: function (id) {
        return {
            type: actionTypes.ADMIN_EDIT_ARTICLE,
            id
        }
    }
};

export function articles(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADMIN_RESPONSE_GET_ARTICLE_LIST:
            return {
                ...state, articleList: [...action.data.list], total: action.data.total,pageNum:action.data.pageNum
            };
        default:
            return state;
    }
}