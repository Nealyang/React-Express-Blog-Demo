

***[项目地址：](https://github.com/Nealyang/React-Express-Blog-Demo)https://github.com/Nealyang/React-Express-Blog-Demo***


> 本想等项目做完再连载一波系列博客，随着开发的进行，也是的确遇到了不少坑，请教了不少人。遂想，何不一边记录踩坑，一边分享收获呢。分享当然是好的，
如果能做到集思广益，那岂不是更美。我们的口号是：***坚决不会烂尾***

***本博客为连载代码博客同步更新博客，随着项目往后开发可能会遇到前面写的不合适的地方会再回头修改。如有不妥~欢迎兄弟们不啬赐教。谢谢！***

## 项目目录

项目目录大致如下：

```
.
├───app                         //前端源码文件夹
├   ├───components              //前端组件文件夹
├   ├───containers              //前端容器组件文件夹
├   ├───fetch                   //封装get/post请求文件夹
├   ├───lib                     //存放第三方引入文件文件夹
├   ├───reducers                //reducer文件夹
├   ├───sagas                   //saga文件夹
├   ├───configureStore.js       //配置store文件
├   ├───index.js                //APP输出文件
├───config                      //存放总应用配置文件夹
├───db                          //存放数据库的文件夹
├───modules                     //存放mongoose model文件夹
├───node_modules                //npm下载项目依赖文件夹
├───record                      //存放一些记录文件的文件夹
├───schemas                     //mongoose schema文件夹
├───server                      // server端源码文件夹
├   ├───api                     //server端 api接口文件夹
├   ├───index.js                //server启动文件
├   ├───server.js               //server文件
├   ├───util.js                 //server端工具类文件
├───static                      //静态资源托管文件夹
├───.babelrc                    //babel配置文件
├───.gitignore                  //git配置文件
├───package.json                //package
├───postcss.config.js           //postcss配置文件
├───README.md                   //项目说明文件
├───webpack.dev.js              //开发环境下webpack配置文件
├───webpack.prod.js             //生成环境打包文件
```
简单说下app里面react的项目结构，
