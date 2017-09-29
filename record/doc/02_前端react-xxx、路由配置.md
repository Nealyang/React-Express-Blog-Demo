# 实战react技术栈+express前后端博客项目（2）-- 前端react-xxx、路由配置

***[项目地址：](https://github.com/Nealyang/React-Express-Blog-Demo)https://github.com/Nealyang/React-Express-Blog-Demo***


> 本想等项目做完再连载一波系列博客，随着开发的进行，也是的确遇到了不少坑，请教了不少人。遂想，何不一边记录踩坑，一边分享收获呢。分享当然是好的，
如果能做到集思广益，那岂不是更美。我们的口号是：***坚决不会烂尾***

***本博客为连载代码博客同步更新博客，随着项目往后开发可能会遇到前面写的不合适的地方会再回头修改。如有不妥~欢迎兄弟们不啬赐教。谢谢！***

## react-redux 配置说明
### reducer
首先我们在项目/app/reducers下新建一个index.js，用于导出所有的reducer。
也用于将admin、front等reducer汇总的文件。最后combineReducers后直接导出。

    export default combineReducers({
        front,
        globalState: reducer,
        admin
    })
    
上面admin,reducer,front是别的文件中的reducer处理。这里我们可以暂时导出一个空的state。

对应的每一个子reducer书写大致如下：

    export const actionTypes = {
        ADMIN_URI_LOCATION:"ADMIN_URI_LOCATION"
    };
    
    const initialState = {
        url:"/"
    };
    
    export const actions = {
        change_location_admin:function (url) {
            return{
                type:actionTypes.ADMIN_URI_LOCATION,
                data:url
            }
        }
    };
    
    export function reducer(state=initialState,action) {
        switch (action.type){
            case actionTypes.ADMIN_URI_LOCATION:
                return {
                    ...state,url:action.data
                };
            default:
                return state
        }
    }
    
    const admin = combineReducers({
        adminGlobalState:reducer,
        users,
        tags
    });
    
    export default admin

定义initialState（这个state节点上的initialState，不总的state），actions，actionTypes以及reducer。然后倒入reducer。
在index中引入后，即为state中的admin节点。

### configureStore
配置store的文件。这个文件的功能正如其名，就是配置store的。其中我们主要做了如下工作。

- applyMiddleware->将一些中间件、reducer、装在进去
- 区分环境，判断是否需要加入开发工具。如：devToolsExtension
- 配合热更新
- createStore

代码如下：

    const win = window;
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [];
    
    let storeEnhancers ;
    if(process.env.NODE_ENV==='production'){
        storeEnhancers = compose(
            applyMiddleware(...middlewares,sagaMiddleware)
        );
    }else{
        storeEnhancers = compose(
            applyMiddleware(...middlewares,sagaMiddleware),
            (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
        );
    }
    
    export default function configureStore(initialState={}) {
        const store = createStore(rootReducer, initialState,storeEnhancers);
        sagaMiddleware.run(rootSaga);
        if (module.hot && process.env.NODE_ENV!=='production') {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept( './reducers',() => {
                const nextRootReducer = require('./reducers/index');
                store.replaceReducer(nextRootReducer);
            });
        }
        return store;
    }
    
最后倒入store，用于在App中使用。

## react-router 配置说明
react-router中的配置主要在/container/index.js文件中。该文件负责导出所有路由中的文件。

说一下该项目的路由大致规则。默认情况下，输入域名（我们这里是localhost），直接进入首页。也就是我们项目中的front部分。

    / -> 首页 （虽然说首页，但是仔细看页面结构，其实就是文章列表页）
    /:tag -> 其他文章列表页
    /detail/:id -> 详情页
    /admin -> 后台管理首页
    /admin/xxx -> 后台管理页的某一个模块 比如：/admin/managerTags -> 标签管理页面
    /404 -> notFound 

所以根据路由配置先具体后模糊的规则。并且这里牵涉到路由嵌套，所以必定抽离出组件来：

index.js render部分如下:

    render() {
            let {isFetching} = this.props;
            return (
                <Router>
                    <div>
                        <Switch>
                            <Route path='/404' component={NotFound}/>
                            <Route path='/admin' component={Admin}/>
                            <Route component={Front}/>
                        </Switch>
                        {isFetching && <Loading/>}
                        {this.props.notification && this.props.notification.content ?
                            (this.props.notification.type === 1 ?
                                this.openNotification('success', this.props.notification.content) :
                                this.openNotification('error', this.props.notification.content)) :
                            null}
                    </div>
                </Router>
            )
        }
 
因为路由模糊的部分只要front部分是最模糊的，所以我们把它匹配到最下面。别的大家应该都没有疑惑，至于isFetch notification后面会介绍。
至于为什么要在这里放这些isFetch和notification。因为这是所有路由的最外面一层，是front和admin界面下公共的部分。Loading加载图标，全局提示信息都可以公用。
所以我们放在最外层。

一定记住。能公用的一组东西，我们一定是放到路由匹配的最外层。

下面看下Font和admin的代码

    const Front = ({match}) => {
        return (
            <div>
                <div className={`${animationStyle.animated} ${animationStyle.fadeInDown}`}>
                    <Banner/>
                    <Menus/>
                </div>
                <Switch>
                    <Route exact path={match.url} component={Home}/>
                    <Route path={`/detail/:id`} component={Detail}/>
                    <Route path={`/:tag`} component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    };
    
admin:
    
    render() {
            const {url} = this.props.match;
            if(this.props.userInfo.userType){
                return (
                    <div>
                        {
                            this.props.userInfo.userType === 'admin' ?
                                <div className={style.container}>
                                    <div className={style.menuContainer}>
                                        <AdminMenu history={this.props.history}
                                                   url={this.props.adminUrl}
                                                   changeUrl={this.props.change_location_admin}/>
                                    </div>
                                    <div className={style.contentContainer}>
                                        <Switch>
                                            <Route exact path={url} component={AdminIndex}/>
                                            <Route path={`${url}/managerUser`} component={AdminManagerUser}/>
                                            <Route path={`${url}/managerTags`} component={AdminManagerTags}/>
                                            <Route path={`${url}/newArticle`} component={AdminNewArticle}/>
                                            <Route path={`${url}/detail`} component={Detail}/>
                                            <Route component={NotFound}/>
                                        </Switch>
                                    </div>
                                </div> :
                                <Redirect to='/'/>
                        }
                    </div>
                )
            }else{
                return <NotFound/>
            }
    
        }
 
 注意admin中的路由匹配，这里必须要使用{match},否则你点击link你会发现路由跳转成功了，但是对应页面没有渲染。
 
 关于admin中为什么判断this.props.userInfo后续权限判断哪里会说到。以及会说这里遇到的一些问题（重点）。这里我们还是只关注路由部分。再次强调，必须使用match
来取url。然后根据自己后台管理的定义项，随着开发，往后面去填充对应的路由即可。

## 结束语

至此，这个项目的redux，router基本就配置完成了。后续随着开发，回往/app/reducers中在添加对应的reducer。以及在路由中添加新建的页面。

如果您有更好想法，欢迎您联系我。我们一起改进~

如果有什么不明白的地方，欢迎提issue。我会第一时间处理。

## 项目实现步骤系列博客

- [x] [实战react技术栈+express前后端博客项目（0）-- 预热一波](./00_预热一波.md)
- [x] [实战react技术栈+express前后端博客项目（1）-- 整体项目结构搭建、state状态树设计](./01_整体项目结构搭建、state状态树设计.md)
- [x] [实战react技术栈+express前后端博客项目（2）-- 前端react-xxx、路由配置](./02_前端react-xxx、路由配置.md)
- [ ] 实战react技术栈+express前后端博客项目（3）-- 后端路由、代理以及静态资源托管等其他配置说明
- [ ] 实战react技术栈+express前后端博客项目（4）-- 博客首页代码编写以及redux-saga组织
- [ ] 实战react技术栈+express前后端博客项目（5）-- 前后端实现登录功能
- [ ] 实战react技术栈+express前后端博客项目（6）-- 使用session实现免登陆+管理后台权限验证
- [ ] 实战react技术栈+express前后端博客项目（7）-- 前端管理界面用户查看功能+后端对应接口开发
- [ ] 实战react技术栈+express前后端博客项目（8）-- 前端管理界面标签管理功能+后端对应接口开发
- [ ] 实战react技术栈+express前后端博客项目（9）-- 前端管理界面标签管理功能+后端对应接口开发
- [ ] 实战react技术栈+express前后端博客项目（10）-- 前端管理界面发表文章功能
- [ ] 实战react技术栈+express前后端博客项目（11）-- 后端接口对应文章部分的增删改查
- [ ] 实战react技术栈+express前后端博客项目（12）-- 前端对于发文部分的完善（增删改查、分页等）
- [ ] 实战react技术栈+express前后端博客项目（13）-- 前端对于发文部分的完善（增删改查等）
- [ ] 实战react技术栈+express前后端博客项目（14）-- 内容详情页以及阅读数的展示
- [ ] 实战react技术栈+express前后端博客项目（15）-- 博客添加评论功能以及对应后端实现
- [ ] 实战react技术栈+express前后端博客项目（16）-- pm2 的使用说明
- [ ] 实战react技术栈+express前后端博客项目（17）-- 收工

## 交流

倘若有哪里说的不是很明白，或者有什么需要与我交流，欢迎各位提issue。或者加群联系我~

***扫码关注我的个人微信公众号，直接回复，必有回应。分享更多原创文章。点击交流学习加我微信、qq群。一起学习，一起进步***

![wx](../wx.jpg)

---

欢迎兄弟们加入：

Node.js技术交流群：209530601 

React技术栈：398240621

前端技术杂谈：604953717 (新建)

---



   
