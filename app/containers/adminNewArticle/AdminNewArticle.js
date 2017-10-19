import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import style from './style.css'
import remark from 'remark'
import reactRenderer from 'remark-react'
import {Input, Select, Button, Modal} from 'antd';
import {actions} from "../../reducers/adminManagerNewArticle";
import {actions as tagActions} from "../../reducers/adminManagerTags";
import dateFormat from 'dateformat'

const {get_all_tags} = tagActions;
const {update_content, update_tags, update_title, save_article} = actions;
const Option = Select.Option;

class AdminNewArticle extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            options: [],
            modalVisible: false
        };
    }

    //正文内容
    onChanges(e) {
        this.props.update_content(e.target.value);
    }

    //标题输入框
    titleOnChange(e) {
        this.props.update_title(e.target.value)
    };

    //选择标签
    selectTags(value) {
        this.props.update_tags(value)
    };

    //预览
    preView() {
        this.setState({
            modalVisible: true
        })
    };

    //发表
    publishArticle() {
        let articleData = {};
        articleData.title = this.props.title;
        articleData.content = this.props.content;
        articleData.tags = this.props.tags;
        articleData.time = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
        articleData.isPublish = true;
        this.props.save_article(articleData);
    };

    //保存
    saveArticle() {
        let articleData = {};
        articleData.title = this.props.title;
        articleData.content = this.props.content;
        articleData.tags = this.props.tags;
        articleData.time = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
        articleData.isPublish = false;
        this.props.save_article(articleData);
    };

    //handleOk
    handleOk() {
        this.setState({
            modalVisible: false
        })
    };

    render() {
        return (
            <div>
                <h2>发文</h2>
                <div className={style.container}>
                    <span className={style.subTitle}>标题</span>
                    <Input
                        className={style.titleInput}
                        placeholder={'请输入文章标题'}
                        type='text'
                        value={this.props.title}
                        onChange={this.titleOnChange.bind(this)}/>
                    <span className={style.subTitle}>正文</span>
                    <textarea
                        className={style.textArea}
                        value={this.props.content}
                        onChange={this.onChanges.bind(this)}/>
                    <span className={style.subTitle}>分类</span>
                    <Select
                        mode="multiple"
                        className={style.titleInput}
                        placeholder="请选择分类"
                        onChange={this.selectTags.bind(this)}
                        value={this.props.tags}
                    >
                        {
                            this.props.tagsBase.map((item) => (
                                <Option key={item}>{item}</Option>
                            ))
                        }
                    </Select>

                    <div className={style.bottomContainer}>
                        <Button type="primary" onClick={this.publishArticle.bind(this)}
                                className={style.buttonStyle}>发布</Button>
                        <Button type="primary" onClick={this.saveArticle.bind(this)}
                                className={style.buttonStyle}>保存</Button>
                        <Button type="primary" onClick={this.preView.bind(this)}
                                className={style.buttonStyle}>预览</Button>
                    </div>
                </div>
                <Modal
                    visible={this.state.modalVisible}
                    title="文章预览"
                    onOk={this.handleOk.bind(this)}
                    width={'900px'}
                    onCancel={this.handleOk.bind(this)}
                    footer={null}
                >
                    <div className={style.modalContainer}>
                        <div id='preview' className={style.testCode}>
                            {remark().use(reactRenderer).processSync(this.props.content).contents}
                        </div>
                    </div>
                </Modal>
            </div>

        )
    }

    componentDidMount() {
        this.props.get_all_tags();
    }
}

AdminNewArticle.propsTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.array,
    tagsBase: PropTypes.array
};

AdminNewArticle.defaultProps = {
    title: '',
    content: '',
    tags: [],
    tagsBase: []
};

function mapStateToProps(state) {
    const {title, content, tags} = state.admin.newArticle;
    let tempArr = state.admin.tags;
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === '首页') {
            tempArr.splice(i, 1);
        }
    }
    return {
        title,
        content,
        tags,
        tagsBase: tempArr
    }
}

function mapDispatchToProps(dispatch) {
    return {
        update_tags: bindActionCreators(update_tags, dispatch),
        update_title: bindActionCreators(update_title, dispatch),
        update_content: bindActionCreators(update_content, dispatch),
        get_all_tags: bindActionCreators(get_all_tags, dispatch),
        save_article: bindActionCreators(save_article, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminNewArticle)