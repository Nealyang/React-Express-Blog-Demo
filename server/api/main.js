import Express from 'express'
const router = Express.Router();

router.get('/user',(req,res)=>{
    res.send('前端API处理')
});

module.exports = router;