import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions} from '../../reducers/adminManagerTags'
import style from './style.css'
import {Tag, Input, Tooltip, Button} from 'antd'

const {get_all_tags,delete_tag,add_tag} = actions;

class AdminManagerTags extends Component{
    constructor(props){
        super(props);
        this.state={
            tags: ['首页', 'HTML', 'CSS','JAVASCRIPT'],
            inputVisible: false,
            inputValue: '',
        }
    }
    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = input => this.input = input;
    render(){
        const { tags, inputVisible, inputValue } = this.state;
        return(
            <div>
                <h2>标签管理</h2>
                {tags.map((tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? <Tooltip key={tag} title={tag}>{tagElem}</Tooltip> : tagElem;
                })}
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        tags:state.admin.tags
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getAllTags : bindActionCreators(get_all_tags,dispatch),
        deleteTag : bindActionCreators(delete_tag,dispatch),
        addTag : bindActionCreators(add_tag,dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminManagerTags)