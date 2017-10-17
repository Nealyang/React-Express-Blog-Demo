const initialState = {
    category: [],
    articleList: [],
    articleDetail: {}
};
export const actionTypes = {
    GET_ARTICLE_LIST: "GET_ARTICLE_LIST",
    RESPONSE_ARTICLE_LIST: "RESPONSE_ARTICLE_LIST",
    GET_ARTICLE_DETAIL: "GET_ARTICLE_DETAIL",
    RESPONSE_ARTICLE_DETAIL: "RESPONSE_ARTICLE_DETAIL"
};

export const actions = {
    get_article_list: function (tag='') {
        return {
            type: actionTypes.GET_ARTICLE_LIST,
            tag
        }
    },
    get_article_detail:function (id) {
        return{
            type:actionTypes.GET_ARTICLE_DETAIL,
            id
        }
    }
};

export function reducer(state = initialState,action) {
    switch (action.type){
        case actionTypes.RESPONSE_ARTICLE_LIST:
            return {
                ...state,articleList:[...action.data]
            };
        case actionTypes.GET_ARTICLE_DETAIL:
            return{
                ...state,articleDetail:action.data
            };

        default:
            return state;
    }
}
