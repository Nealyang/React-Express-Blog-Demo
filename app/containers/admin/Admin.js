import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {
    Switch,
    Route,
    Redirect
}from 'react-router-dom'
import AdminMenu from "../../components/adminMenu/AdminMenu";
import Detail from "../detail/Detail";
import AdminIndex from "../adminIndex/AdminIndex"
import NotFound from "../../components/notFound/NotFound";
import style from './style.css'
import {bindActionCreators} from 'redux'
import {actions} from '../../reducers/admin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import AdminManagerUser from "../adminManagerUser/AdminManagerUser";
const {change_location_admin} = actions;
class Admin extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render(){
        return(
            <div>
                {
                    this.props.userInfo.userType === 'admin' ?
                        <div className={style.container}>
                            <div className={style.menuContainer}>
                                <AdminMenu history={this.props.history} url={window.location.pathname.replace(/\/admin/,"")} changeUrl={this.props.change_location_admin}/>
                            </div>
                            <div className={style.contentContainer}>
                                <Switch>
                                    <Route exact path={this.props.url} component={AdminIndex}/>
                                    <Route path={`${this.props.url}/managerUser`} component={AdminManagerUser}/>
                                    <Route path={`${this.props.url}/detail`} component={Detail}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </div>
                        </div> :
                        <Redirect to='/'/>
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.change_location_admin(window.location.pathname.replace(/\/admin/,""));
    }
}

Admin.defaultProps = {
    adminUrl:'/'
};

Admin.propTypes = {
    adminUrl:PropTypes.string,
    change_location_admin:PropTypes.func
};

function mapStateToProps(state) {
    const {url} = state.admin.adminGlobalState;
    return{
        adminUrl:url,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        change_location_admin:bindActionCreators(change_location_admin,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Admin)