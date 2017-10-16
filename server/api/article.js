import Express from 'express'

const router = Express.Router();
import Articles from '../../models/article'
import {responseClient} from '../util'

router.post('/addArticle', function (req, res) {
    const {
        title,
        content,
        time,
        tags
    } = req.body;
    const author = req.userInfo.username;
    const coverImg = Math.round(Math.random() * 9 + 1) + '.jpg';
    const viewCount = 0;
    const commentCount = 0;

    res.send({
        title,
        content,
        viewCount,
        commentCount,
        time,
        author,
        coverImg,
        tags
    });
});

module.exports = router;