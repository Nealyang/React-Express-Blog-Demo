import React,{Component,PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import style from './style.css'
import remark from 'remark'
import  reactRenderer from 'remark-react'

class AdminNewArticle extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            text:"# hello world"
        };
    }

    onChanges(e) {
        this.setState({ text: e.target.value });
    }

    render(){
        return(
            <div>
                <textarea
                    style={{width:'100%',height:'400px'}}
                    value={this.state.text}
                    onChange={this.onChanges.bind(this)} />
                <div id='preview' className={style.testCode}>
                    {remark().use(reactRenderer).processSync(this.state.text).contents}
                </div>
            </div>

        )
    }
}

AdminNewArticle.propsTypes = {

};

AdminNewArticle.defaultProps = {

};

function mapStateToProps(state) {
    return{

    }
}

function mapDispatchToProps(dispatch) {
    return{

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminNewArticle)