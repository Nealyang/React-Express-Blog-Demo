import React, {Component, PropTypes} from 'react'
import PureRenderMixiin from 'react-addons-pure-render-mixin'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import style from './style.css'

import {Detail} from './detail'
import {Home} from './home'

class AppIndex extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixiin.shouldComponentUpdate.bind(this);
        this.state={
            count:1
        }
    }

    render() {
        return (
            <Router>
                <div className={style.app}>
                    <button onClick={()=>this.setState({count:this.state.count+1})}>IndexRoot</button>
                    <h2>{this.state.count}</h2>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail' component={Detail}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AppIndex