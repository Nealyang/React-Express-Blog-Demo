import React,{Component,PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {ArticleListCell} from "../articleListCell/ArticleListCell";

export default class ArticleList extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return(
            <div>
                <ArticleListCell tag={1}/>
                <ArticleListCell tag={2}/>
                <ArticleListCell tag={3}/>
                <ArticleListCell tag={4}/>
            </div>
        )
    }
}