import React,{Component} from 'react'
import {Menu} from 'antd'
import style from './style.css'

export default class Menus extends Component{
    constructor(props){
        super(props);
        this.state = {
            current:"mail"
        }
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render(){
        return(
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className={style.MenuContainer}
            >
                <Menu.Item key="mail">
                    ReactJs
                </Menu.Item>
                <Menu.Item key="app">
                    Html
                </Menu.Item>
                <Menu.Item key="alipay">
                    Javascript
                </Menu.Item>
            </Menu>
        )
    }
}
