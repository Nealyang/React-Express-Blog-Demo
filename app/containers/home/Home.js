import React, {Component,PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
    Redirect
} from 'react-router-dom'
import style from './style.css'
import ArticleList from "./components/articelList/ArticleList";
import Login from "./components/login/Login";
import {Pagination} from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions} from '../../reducers/index'

const tags = ['html', 'javascript', 'css', 'reactJs', 'redux', 'vue', ''];

class Home extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const {login,register} = this.props;
        return (
            this.props.match.params.tag && (tags.indexOf(this.props.match.params.tag) === -1 || this.props.location.pathname.lastIndexOf('\/') > 0)
                ?
                <Redirect to='/404'/>
                :
                <div className={style.container}>
                    <div className={style.contentContainer}>
                        <div className={style.newsContainer}>
                            <ArticleList/>
                            <div className={style.paginationContainer}>
                                <Pagination defaultCurrent={6} total={500}/>
                            </div>
                        </div>
                        <div className={style.loginContainer}>
                            <Login userInfo={this.props.userInfo} login={login} register={register}/>
                        </div>
                    </div>
                </div>
        )
    }
}

Home.defaultProps = {
    userInfo:{}
};

Home.propsTypes = {
    userInfo:PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return{
        userInfo:state.globalState.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return{
        login:bindActionCreators(actions.get_login,dispatch),
        register:bindActionCreators(actions.get_register,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);