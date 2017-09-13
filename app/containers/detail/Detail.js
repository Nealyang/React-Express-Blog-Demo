import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Detail extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return(
            <h1>Home</h1>
        )
    }
}

export default Detail;