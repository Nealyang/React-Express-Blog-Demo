import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const win = window;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

let storeEnhancers ;
if(process.env.NODE_ENV==='production'){
    storeEnhancers = compose(
        applyMiddleware(...middlewares,sagaMiddleware)
    );
}else{
    storeEnhancers = compose(
        applyMiddleware(...middlewares,sagaMiddleware),
        (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
    );
}

export default function configureStore(initialState={}) {
    const store = createStore(rootReducer, initialState,storeEnhancers);
    sagaMiddleware.run(rootSaga);
    if (module.hot && process.env.NODE_ENV!=='production') {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept( './reducers',() => {
            const nextRootReducer = require('./reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
