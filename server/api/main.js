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
    next();
});

router.use('/user',require('./user'));

module.exports = router;