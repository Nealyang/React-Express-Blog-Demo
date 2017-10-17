import PureRenderMixin from 'react-addons-pure-render-mixin'
import React,{Component,PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import style from './style.css'
import {ManagerArticleCell} from "./components/ManagerArticleCell";
import { Pagination } from 'antd';
import {actions} from '../../reducers/adminManagerArticle'
const {get_article_list,delete_article,edit_article} = actions;
class AdminManagerArticle extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return(
            <div>
                <h2>文章管理</h2>
                <div className={style.articleListContainer}>
                    <ManagerArticleCell/>
                    <ManagerArticleCell/>
                    <ManagerArticleCell/>
                    <ManagerArticleCell/>
                    <ManagerArticleCell/>
                    <ManagerArticleCell/>
                    <ManagerArticleCell/>
                    <ManagerArticleCell/>
                    <ManagerArticleCell/>
                    <ManagerArticleCell/>
                </div>
                <div  className={style.paginationStyle}>
                    <Pagination defaultCurrent={6} total={500} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        articleList:state.admin.articles.articleList
    }
}

function mapDispatchToProps(dispatch) {
    return{
        get_article_list:bindActionCreators(get_article_list,dispatch),
        delete_article:bindActionCreators(delete_article,dispatch),
        edit_article:bindActionCreators(edit_article,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminManagerArticle);

