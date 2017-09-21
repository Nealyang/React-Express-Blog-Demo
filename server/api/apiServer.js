/**
 * api请求server
 */
import Express from 'express'
import config from '../../config/config'
import bodyParser from 'body-parser'


const port = config.apiPort;

const app = new Express();
app.use(bodyParser.urlencoded({extended:false}));

//展示页面路由
app.use('/',require('./main'));
//管理页面路由
app.use('/admin',require('./admin'));

app.listen(port,function (err) {
    if(err){
        console.error('err:',err);
    }else{
        console.info(`===> api server is running at ${config.apiHost}:${config.apiPort}`)
    }
});