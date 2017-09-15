import React,{Component,PropsTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;
import style from './style.css'

export default class Banner extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return (
            <BannerAnim prefixCls="banner-user" autoPlay>
                <Element
                    prefixCls="banner-user-elem"
                    key="0"
                    style={{
                        background: '#364D79',
                    }}
                >
                    <BgElement
                        key="bg"
                        className="bg"
                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
                <Element
                    prefixCls="banner-user-elem"
                    key="1"
                    style={{
                        background: '#64CBCC',
                    }}
                >
                    <BgElement
                        key="bg"
                        className="bg"

                    />
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
            </BannerAnim>);
    }
}