import React,{Component,PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AdminManagerUser extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return(
            <h1>用户管理</h1>
        )
    }
}

AdminManagerUser.propsTypes = {

};

AdminManagerUser.defaultProps = {

};

function mapStateToProps(state) {
    return{

    }
}

function mapDispatchToProps(dispatch) {
    return{

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminManagerUser)