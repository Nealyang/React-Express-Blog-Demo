import React,{Component} from 'react'
import {Menu,Icon} from 'antd'

export default class AdminMenu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
            >
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                </Menu.Item>
            </Menu>
        )
    }
}
