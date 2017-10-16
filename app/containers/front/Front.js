import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import animationStyle from '../../lib/animate.css'
import {Detail} from '../detail'
import {Home} from '../home'
import {
    Switch,
    Route
} from 'react-router-dom'
import Banner from "../components/banner/Banner";
import Menus from "../components/menu/Menus";
import NotFound from "../../components/notFound/NotFound";
import {bindActionCreators} from 'redux'
import {actions} from '../../reducers/adminManagerTags'

const {get_all_tags} = actions;

class Front extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {url} = this.props.match;
        return(
            <div>
                <div className={`${animationStyle.animated} ${animationStyle.fadeInDown}`}>
                    <Banner/>
                    <Menus categories={this.props.categories} history={this.props.history}/>
                </div>
                <Switch>
                    <Route exact path={url} component={Home}/>
                    <Route path={`/detail/:id`} component={Detail}/>
                    <Route path={`/:tag`} component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }

    componentDidMount() {
        this.props.get_all_tags();
    }
}

Front.defaultProps = {
    categories:[]
};

Front.propTypes = {
    categories:PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return{
        categories:state.admin.tags
    }
}
function mapDispatchToProps(dispatch) {
    return{
        get_all_tags:bindActionCreators(get_all_tags,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Front)