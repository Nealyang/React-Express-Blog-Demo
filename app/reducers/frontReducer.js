const initialState = {
    category: [],
    articleList: [],
    articleDetail: {},
    pageNum: 1,
    total: 0
};
export const actionTypes = {
    GET_ARTICLE_LIST: "GET_ARTICLE_LIST",
    RESPONSE_ARTICLE_LIST: "RESPONSE_ARTICLE_LIST",
    GET_ARTICLE_DETAIL: "GET_ARTICLE_DETAIL",
    RESPONSE_ARTICLE_DETAIL: "RESPONSE_ARTICLE_DETAIL"
};

export const actions = {
    get_article_list: function (tag = '', pageNum = 1) {
        return {
            type: actionTypes.GET_ARTICLE_LIST,
            tag,
            pageNum
        }
    },
    get_article_detail: function (id) {
        return {
            type: actionTypes.GET_ARTICLE_DETAIL,
            id
        }
    }
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.RESPONSE_ARTICLE_LIST:
            return {
                ...state, articleList: [...action.data.list], pageNum: action.data.pageNum, total: action.data.total
            };
        case actionTypes.RESPONSE_ARTICLE_DETAIL:
            return {
                ...state, articleDetail: action.data
            };

        default:
            return state;
    }
}
