import Express from 'express'
const router = Express.Router();

//获取全部标签
router.get('/getAllTags',function (req,res) {
    res.send('getAllTags')
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