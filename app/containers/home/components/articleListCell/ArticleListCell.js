import React from 'react'
import style from './style.css'
import test1 from '../../../../../static/1.jpg'
import test2 from '../../../../../static/2.jpg'
import test3 from '../../../../../static/3.jpg'
import test4 from '../../../../../static/4.jpg'
import { Link } from 'react-router-dom'

export const ArticleListCell = (props) => (
  <div className={`${style.container} `} onClick={() => { console.log(props.data, 'props.data'); props.history.push(`/detail/${props.data._id}`, { id: props.data._id }); props.getArticleDetail(props.data._id) }}>
    <div>
      <img src={props.data.coverImg} alt="" />
    </div>
    <div className={style.bottomContainer}>
      <p className={style.title}>
        {props.data.title}
      </p>
      <p className={style.summary}>
        {props.data.summary || '点击查看详情'}
      </p>
      <div>
        <p>
          <span>
            <img src={require('./calendar.png')} alt="发表日期" />
            {props.data.time}
          </span>
          <span>
            <img src={require('./views.png')} alt="阅读数" />
            {props.data.viewCount}
          </span>
          <span>
            <img src={require('./comments.png')} alt="评论数" />
            {props.data.commentCount}
          </span>
        </p>
      </div>
    </div>
  </div>
);