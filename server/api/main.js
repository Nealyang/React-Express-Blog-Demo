import Express from 'express'
const router = Express.Router();
let responseData = {};

/**
 *定义回复模板
 */
router.use(function (req, res, next) {
    responseData.code = 200;
    responseData.message = '';
    responseData.data = {};
    next()
});

router.post('/user/login',(req,res)=>{
    console.log(req.body)
    // res.json({
    //     code:200,
    //     message:'ok',
    //     data:{dd:111}
    // })
});

module.exports = router;