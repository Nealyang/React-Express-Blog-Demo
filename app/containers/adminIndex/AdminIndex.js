import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {actions} from '../../reducers/index'
import {bindActionCreators} from 'redux'
import {
    Redirect
} from 'react-router-dom'
const {user_auth} = actions;
class AdminIndex extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        if(this.props.userInfo.userType){
            return (
                <div>
                    {this.props.isAdmin? <h1>admin管理页面</h1>:<Redirect to='/'/>}
                </div>
            )
        }else{
            return <h1>您没有权限</h1>
        }

    }
}

AdminIndex.defaultProps = {
    isAdmin:false
};

function mapStateToProps(state) {
    return {
        isAdmin: state.globalState.userInfo.userType === 'admin',
        userInfo:state.globalState.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        user_auth:bindActionCreators(user_auth,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminIndex)