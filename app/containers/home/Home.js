import React, {Component, PropTypes} from 'react'
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
import {actions as frontActions} from '../../reducers/frontReducer'
import {Logined} from "./components/logined/Logined";
import anStyle from '../../lib/animate.css'
import NotFound from "../../components/notFound/NotFound";

const {get_article_list} = frontActions;

class Home extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const {login, register, tags} = this.props;
        localStorage.setItem('userInfo', JSON.stringify(this.props.userInfo));
        return (
            tags.length > 1 && this.props.match.params.tag && (tags.indexOf(this.props.match.params.tag) === -1 || this.props.location.pathname.lastIndexOf('\/') > 0)
                ?
                <Redirect to='/404'/>
                :
                <div className={style.container}>
                    <div className={style.contentContainer}>
                        <div className={`${style.newsContainer} ${anStyle.animated} ${anStyle.fadeInUp}`}>
                            <ArticleList
                                data={this.props.articleList}
                            />
                            <div className={style.paginationContainer}>
                                <Pagination
                                    defaultPageSize={5}
                                    onChange={(pageNum) => {
                                        this.props.get_article_list(this.props.match.params.tag||'',pageNum);
                                    }}
                                    current={this.props.pageNum}
                                    total={this.props.total}/>
                            </div>
                        </div>
                        <div className={`${style.loginContainer} ${anStyle.animated} ${anStyle.fadeInRight}`}>
                            {this.props.userInfo.userId ?
                                <Logined history={this.props.history} userInfo={this.props.userInfo}/> :
                                <Login login={login} register={register}/>}
                        </div>
                    </div>
                </div>
        )
    }

    componentDidMount() {
        this.props.get_article_list(this.props.match.params.tag||'')
    }
}

Home.defaultProps = {
    userInfo: {},
    pageNum:1,
    total:0,
    articleList:[]
};

Home.propsTypes = {
    userInfo: PropTypes.object.isRequired,
    pageNum:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    articleList:PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        userInfo: state.globalState.userInfo,
        tags: state.admin.tags,
        pageNum:state.front.pageNum,
        total:state.front.total,
        articleList:state.front.articleList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(actions.get_login, dispatch),
        register: bindActionCreators(actions.get_register, dispatch),
        get_article_list: bindActionCreators(get_article_list, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);