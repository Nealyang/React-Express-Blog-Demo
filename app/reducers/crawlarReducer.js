const initialState = ['crawlar'];

export const actionTypes = {
    GET_DATAS:"GET_DATAS"
};

export const actions = {
    get_datas:function () {
        return{
            type:actionTypes.GET_DATAS
        }
    }
};

// export function reducer(state=initialState,action) {
//     switch (action.type){
//         case actionTypes.GET_DATAS:
//             console.log(...action.data, 'action.data')
//             return['crawlar',...action.data];
//         default:
//             return  state;
//     }
// }