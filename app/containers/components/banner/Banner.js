import React,{Component,PropsTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css'
import { Carousel } from 'antd';
const carouselImgs = [
    require('./banner_1.png'),
    require('./banner_2.png'),
    require('./banner_3.png'),
]
export default class Banner extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.renderCarousel = this.renderCarousel.bind(this)
    }

    render(){
        return (
            <Carousel autoplay>
                {this.renderCarousel(carouselImgs)}
            </Carousel>
           );
    }

    renderCarousel(imgs){
        return imgs.map((item,index)=>
            <div key={index} className={style.carouselImgContainer}>
                <img src={item}/>
            </div>
        )
    }
}