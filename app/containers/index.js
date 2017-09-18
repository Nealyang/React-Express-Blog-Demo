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
import Menus from "./components/menu/Menus";
import NotFound from "../components/notFound/NotFound";

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
                    <Switch>
                        <Route path='/404' component={NotFound}/>
                        <Route path='/admin' component={Admin}/>
                        <Route component={Front}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}

const Front = ({match})=>{
    return(
        <div>
            <Banner/>
            <Menus/>
            <Switch>
                <Route exact path={match.url} component={Home}/>
                <Route path={`/detail/:id`} component={Detail}/>
                <Route path={`/:tag`} component={Home}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
};


const Admin = ({match})=>{
    return(
        <div>
            <Switch>
                <Route exact path={match.url} component={Home}/>
                <Route path={`${match.url}/detail`} component={Detail}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
};


export default AppIndex