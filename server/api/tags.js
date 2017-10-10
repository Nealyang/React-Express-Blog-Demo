import Express from 'express'
const router = Express.Router();
import Tags from '../../models/tags'

//获取全部标签
router.get('/getAllTags',function (req,res) {
    Tags.find(null).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.send('getAllTags')
    })
});

//删除标签
router.get('/delTag',function (req,res) {
    res.send('删除')
});

//添加标签
router.get('/addTag',function (req,res) {
    res.send('添加')
});


module.exports = router;