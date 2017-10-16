import Express from 'express'
import Tags from '../../models/tags'
import Article from '../../models/article'
import {responseClient} from '../util'
const router = Express.Router();

router.use('/user',require('./user'));
//获取全部标签
router.get('/getAllTags', function (req, res) {
    Tags.find(null,'name').then(data => {
        responseClient(res, 200, 0, '请求成功', data);
    }).catch(err => {
        responseClient(res);
    })
});

//获取文章
router.get('/getArticles',function (req,res) {
   let tag = req.query.tag;
   responseClient(res,200,0,'success',tag);
});

module.exports = router;