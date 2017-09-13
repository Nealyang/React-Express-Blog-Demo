import React from 'react'
import IndexApp from './containers'
import {render} from 'react-dom'
// import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import AppIndex from "./containers/index";

let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');

render(
    <AppContainer >
        <AppIndex/>
    </AppContainer>
    ,
    mountNode
);
if(module.hot){
    // module.hot.accept('./containers',()=>{
    //     render(
    //         <AppContainer component={require('./containers').default}/>,
    //         mountNode
    //     )
    // })
    module.hot.accept();
}