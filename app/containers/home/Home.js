import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
    Redirect
} from 'react-router-dom'
import style from './style.css'
import ArticleList from "./components/articelList/ArticleList";
import Login from "./components/login/Login";
import {Pagination} from 'antd';

const tags = ['html', 'javascript', 'css', 'reactJs', 'redux', 'vue', ''];

class Home extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        console.log(this.props.match.params.tag);
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
                            <Login/>
                        </div>
                    </div>
                </div>
        )
    }

    componentDidMount() {
        console.log(this.props)
    }
}

export default Home;