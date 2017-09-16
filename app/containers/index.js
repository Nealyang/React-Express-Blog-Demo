import React, {Component, PropTypes} from 'react'
import PureRenderMixiin from 'react-addons-pure-render-mixin'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import './reset.css'
import {Detail} from './detail'
import {Home} from './home'
import Banner from "./components/banner/Banner";

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
                <div>
                    <Banner />
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