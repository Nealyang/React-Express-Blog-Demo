import React,{Component,PropTypes} from 'react'
import style from './style.css'
import test from '../../../../../static/1.jpg'
export  const ArticleListCell = (props)=>(
    <div className={style.container}>
        <div>
            <img src={test} alt=""/>
        </div>
        <div className={style.bottomContainer}>
            <p className={style.title}>
                粉底修容法 轻松快速变身V脸美人
            </p>
            <p className={style.summary}>
                潮流时刻在变，仿佛睡醒一觉就突然发现，最新的流行已经不是圆圆的芭比眼，长形眼才是标配，也就是眼大还不够还要看起 […]
            </p>
            <div>
                <p>
                    <span>
                        <img src={require('./calendar.png')} alt="发表日期"/>
                        2017/09/22
                    </span>
                    <span>
                        <img src={require('./views.png')} alt="阅读数"/>
                        266
                    </span>
                    <span>
                        <img src={require('./calendar.png')} alt="评论数"/>
                        5
                    </span>
                </p>
                <span className={style.lastSpan}>
                    阅读全文 <span>》</span>
                </span>
            </div>
        </div>
    </div>
);