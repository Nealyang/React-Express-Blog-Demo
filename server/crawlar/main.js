import Express from 'express'

var cheerio = require('cheerio'); //可以像jquer一样操作界面
var charset = require('superagent-charset'); //解决乱码问题:
var superagent = require('superagent'); //发起请求 
charset(superagent);
var async = require('async'); //异步抓取
var eventproxy = require('eventproxy');  //流程控制
var ep = eventproxy();

var baseUrl = 'http://www.dytt8.net';  //迅雷首页链接
var newMovieLinkArr = []; //存放新电影的url
var errLength = [];     //统计出错的链接数
var highScoreMovieArr = [] //高评分电影

// import server from './crawlar'
// 爬虫的路由，执行这个主文件，然后去执行crawlar.js文件

const router = Express.Router();

function getAllMovieLink($) {
  var linkElem = $('.co_content2 ul a');
  for (var i = 1; i < 170; i++) {
    var url = 'http://www.dytt8.net' + linkElem.eq(i).attr('href');
    // 注意去重
    if (newMovieLinkArr.indexOf(url) == -1) {
      newMovieLinkArr.push(url);
    };
  }
}

//评分8分以上影片 200余部!，这里只是统计数据，不再进行抓取
function highScoreMovie($) {
  var url = 'http://www.dytt8.net' + $('.co_content2').eq(1).children('ul a').attr('href');
  console.log(url, 'url');
  superagent
    .get(url)
    .charset('gb2312')
    .end(function (err, sres) {
      // 常规的错误处理
      if (err) {
        console.log('抓取' + url + '这条信息的时候出错了')
      }
      var $ = cheerio.load(sres.text);
      var elemP = $('#Zoom p');
      var elemA = $('#Zoom a');
      for (var k = 1; k < elemP.length; k++) {
        var Hurl = elemP.eq(k).find('a').text();
        if (highScoreMovieArr.indexOf(Hurl) == -1) {
          highScoreMovieArr.push(Hurl);
        };
      }
    });
}

// 获取下载链接
function getDownloadLink($, callback) {
  var downLink = $('#Zoom table a').text();
  var movieName = $('.title_all h1 font').text();
  var obj = {
    'downLink': downLink,
    'movieName': movieName
  };
  if (!downLink) {
    downLink = '该电影暂无链接';
  }
  callback(obj);
}

router.get('/getCrawlarInfo', function (req, res, next) {
  res.write('aaaaaaaaaa');
  // 命令 ep 重复监听 emit事件(get_topic_html)，当get_topic_html爬取完毕之后执行
  ep.after('get_topic_html', 1, function (eps) {
    var concurrencyCount = 0;
    var num = -4; //因为是5个并发，所以需要减4

    // 利用callback函数将结果返回去，然后在结果中取出整个结果数组。
    var fetchUrl = function (myurl, callback) {
      var fetchStart = new Date().getTime();
      concurrencyCount++;
      num += 1
      console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', myurl);
      superagent
        .get(myurl)
        .charset('gb2312') //解决编码问题
        .end(function (err, ssres) {

          if (err) {
            callback(err, myurl + ' error happened!');
            errLength.push(myurl);
            return next(err);
          }

          var time = new Date().getTime() - fetchStart;
          console.log('抓取 ' + myurl + ' 成功', '，耗时' + time + '毫秒');
          concurrencyCount--;

          var $ = cheerio.load(ssres.text);

          // 对获取的结果进行处理函数
          getDownloadLink($, function (obj) {
            res.write('<br/>');
            res.write(num + '、电影名称-->  ' + obj.movieName);
            res.write('<br/>');
            res.write('迅雷下载链接-->  ' + obj.downLink);
            res.write('<br/>');
            res.write('详情链接-->  <a href=' + myurl + ' target="_blank">' + myurl + '<a/>');
            res.write('<br/>');
            res.write('<br/>');
          });
          var result = {
            movieLink: myurl
          };
          callback(null, result);
        });
    };

    // 控制最大并发数为5，在结果中取出callback返回来的整个结果数组。
    // mapLimit(arr, limit, iterator, [callback])
    async.mapLimit(newMovieLinkArr, 5, function (myurl, callback) {
      fetchUrl(myurl, callback);
    }, function (err, result) {
      // 爬虫结束后的回调，可以做一些统计结果
      console.log('抓包结束，一共抓取了-->' + newMovieLinkArr.length + '条数据');
      console.log('出错-->' + errLength.length + '条数据');
      console.log('高评分电影：==》' + highScoreMovieArr.length + '部');
      return false;
    });

  });

  //先抓取迅雷首页
  (function (page) {
    superagent
      .get(page)
      .charset('gb2312')
      .end(function (err, sres) {
        // 常规的错误处理
        if (err) {
          console.log('抓取' + page + '这条信息的时候出错了')
          return next(err);
        }
        var $ = cheerio.load(sres.text);
        // 170条电影链接，注意去重
        getAllMovieLink($);
        highScoreMovie($);
        /*
          *流程控制语句
          *当首页左侧的链接爬取完毕之后，我们就开始爬取里面的详情页
          */
        ep.emit('get_topic_html', 'get ' + page + ' successful');
      });
  })(baseUrl);
});

module.exports = router;