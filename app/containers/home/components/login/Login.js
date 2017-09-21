import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css'
import {Tabs} from 'antd';
import LoginForm from './LoginForm'
import RegisterForm from "./RegisterForm";
const TabPane = Tabs.TabPane;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }


    render() {
        return (
            <Tabs defaultActiveKey="1" tabBarStyle={{textAlign: 'center'}} className={style.container}>
                <TabPane tab="注册" key="1">
                    <LoginForm/>
                </TabPane>
                <TabPane tab="登录" key="2">
                    <RegisterForm/>
                </TabPane>
            </Tabs>
        )
    }
}


