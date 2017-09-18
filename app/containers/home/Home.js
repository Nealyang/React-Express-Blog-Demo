import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {
    Redirect
} from 'react-router-dom'

const tags = ['html','javascript','css','reactJs','redux','vue'];

class Home extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return(
           tags.indexOf(this.props.match.params.tag)===-1||this.props.location.pathname.lastIndexOf('\/')>0
               ?
               <Redirect to='/404'/>
               :
               <div>

               </div>
        )
    }

    componentDidMount() {
        console.log(this.props)
    }
}

export default Home;