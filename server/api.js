/**
 * api请求server
 */
import Express from 'express'
import config from '../config/config'

const port = config.apiPort;

const app = new Express();

app.listen(port,function (err) {
    if(err){
        console.error('err:',err);
    }else{
        console.info(`===> api server is running at ${config.apiHost}:${config.apiPort}`)
    }
});