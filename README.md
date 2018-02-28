# React技术栈+Express+Mongodb实现个人博客

## 说明

***放到开头，这里重点说明下，很多哥们会发邮件群里艾特，但是好多邮件回复不了不知道什么情况，群里有时候不怎么关注就错过了，大家如果有啥问题咱就直接提issue吧，后面朋友遇到相同问题大家也可以参考***

## 功能描述

***前端部分***

- [x] 文章列表展示
- [x] 文章分类
- [x] 登录管理
- [x] 权限管理
- [x] 文章详情页展示
- [x] 管理员文章管理
- [x] 管理员标签管理
- [x] 发文（支持MarkDown语法）

***后端部分***
- [x] mongoose数据库操作
- [x] 路由管理
- [x] 身份验证
- [x] 基本的增删改查
- [x] ...

## 技术栈
- [x] react
- [x] react-redux
- [x] react-router
- [x] redux-saga
- [x] babel
- [x] webpack
- [x] Express
- [x] Mongodb
- [x] Mongoose

## TODO

- 文章评论 


## 项目运行效果（这个GIF不是连续播放的，我好烦）
- 首页
![index](./record/2017-09-28%2010_25_45.gif)

- 非管理员登录

![nealyanglogined](./record/nealyangLogined.gif)

- 管理员登录

![adminLogined](./record/adminLogined.gif)

- 标签管理

![amdinTag](./record/adminTag.gif)

- 查看文章详情
![detail](./record/checkArticleDetail.gif)

- 发表文章
![newArticle](./record/new_article.gif)

- 修改文章
![modifiedArticle](./record/modifiedArticle.gif)



## 项目介绍
当然这是一个全栈的开源demo，在此之前写过一个[模仿大众点评的Demo](https://github.com/Nealyang/React-Fullstack-Dianping-Demo),有兄弟反应说应该加点注释。
因为实在不想回头再麻烦，就想在这个demo中再加。

这个demo就是一个简单的增删改查的博客demo。前端用react技术栈、后端是express+mongoose。


## 项目实现步骤系列博客

- [x] [实战react技术栈+express前后端博客项目（0）-- 预热一波](./record/doc/00_预热一波.md)
- [x] [实战react技术栈+express前后端博客项目（1）-- 整体项目结构搭建、state状态树设计](./record/doc/01_整体项目结构搭建、state状态树设计.md)
- [x] [实战react技术栈+express前后端博客项目（2）-- 前端react-xxx、路由配置](https://github.com/Nealyang/React-Express-Blog-Demo/blob/master/record/doc/02_%E5%89%8D%E7%AB%AFreact-xxx%E3%80%81%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE.md)
- [x] [实战react技术栈+express前后端博客项目（3）-- 后端路由、代理以及静态资源托管等其他配置说明](./record/doc/03_后端路由、代理以及静态资源托管等其他配置说明.md)
- [x] [实战react技术栈+express前后端博客项目（4）-- 博客首页代码编写以及redux-saga组织](./record/doc/04_博客首页代码编写以及redux-saga组织.md)
- [x] [实战react技术栈+express前后端博客项目（5）-- 前后端实现登录功能](./record/doc/05_前后端实现登录功能.md)
- [x] [实战react技术栈+express前后端博客项目（6）-- 使用session实现免登陆+管理后台权限验证](./record/doc/06_使用session实现免登陆+管理后台权限验证.md)
- [x] [实战react技术栈+express前后端博客项目（7）-- 前端管理界面用户查看功能+后端对应接口开发](./record/doc/07_前端管理界面用户查看功能+后端对应接口开发.md)
- [x] [实战react技术栈+express前后端博客项目（8）-- 前端管理界面标签管理功能+后端对应接口开发](./record/doc/08_前端管理界面标签管理功能+后端对应接口开发.md)
- [x] [实战react技术栈+express前后端博客项目（9）-- 前端管理界面发表文章功能+后端对应接口](./record/doc/09_前端管理界面发表文章功能+后端对应接口.md)
- [x] [开发实战react技术栈+express前后端博客项目（10）-- 前端文章列表、路由控制以及对应后端文章管理开发](./record/doc/10_前端文章列表、路由控制以及对应后端文章管理开发.md)
- [x] [实战react技术栈+express前后端博客项目（11）-- 前端文章管理部分完善（修改、预览功能）](./record/doc/11_前端文章管理部分完善（修改、预览功能）.md)
- [x] [实战react技术栈+express前后端博客项目（12）-- 博客添加评论功能以及对应后端实现](http://huziketang.com/books/react/lesson14)
- [x] [实战react技术栈+express前后端博客项目（13）-- pm2的使用说明](https://github.com/jawil/blog/issues/7)
- [x] [实战react技术栈+express前后端博客项目（14）-- 收工](./record/doc/13_收工.md)

## 环境

```
node @7.9.0
db @3.4.0
...
别的就直接npm install 了

注意MongoDB初始化后需要初始化一个admin/admin账户，用于登录后台管理
```

## 运行

    git clone git@github.com:Nealyang/React-Express-Blog-Demo.git
    
    npm i
    
    npm start
    
## 开发数据库

> 链接: https://pan.baidu.com/s/1c3aedw8 密码: 5ii1

## 交流

***扫码关注我的个人微信公众号，分享更多原创文章。点击交流学习加我微信、qq群。一起学习，一起进步***

![wx](./record/wx.jpg)

---

欢迎兄弟们加入：

Node.js技术交流群：209530601 

React技术栈：398240621

前端技术杂谈：604953717 (新建)

---




