import style from '../style.css'
import React from 'react'
import {Button} from 'antd'
export const ManagerArticleCell = (props)=>(
    <div className={style.cellContainer}>
        <div className={style.cellAboutArticle}>
            <p className={style.articleTitle}>这是一个文章标题</p>
            <p className={style.articleInfo}>
                <span>作者:Nealyang</span>
                <span>阅读数:23</span>
                <span>评论数:2</span>
                <span>发表时间:2017-09-11 21:12:28</span>
            </p>
        </div>
        <div className={style.cellState}>
            <span>
                已发布
            </span>
        </div>
        <div className={style.cellOperation}>
            <Button type='primary' icon="edit">编辑</Button>
            <Button type='primary' icon="delete">删除</Button>
            <Button type='primary' icon="eye-o">查看</Button>
        </div>
    </div>
);