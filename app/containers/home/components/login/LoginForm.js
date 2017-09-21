import React, {Component} from 'react'
import {Input, Form, Icon, Button} from 'antd'

const FormItem = Form.Item;
import style from './style.css'
import {get, post} from "../../../../fetch/fetch";

class LoginFormCom extends Component {
    constructor(props) {
        super(props);
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                post('/user/login', values)
                    .then(data => {
                        console.log(data)
                    }).catch(err => {
                    console.log(err)
                })
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleLogin} className={style.formStyle}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: '请输入用户名!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button className={style.loginButton} type="primary" htmlType="submit">
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

const LoginForm = Form.create()(LoginFormCom);

export default LoginForm