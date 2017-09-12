export const actionTypes = {
    HOME_LOAD:'HOME_LOAD',
};

const initialState = {};



export function reducer(state=initialState,action) {
    switch (action.type){
        default:
            return state;
    }
}

export const action = {
  getArticleList:function () {
      return actionTypes.HOME_LOAD
  }
};