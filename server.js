const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev');

const app = new (require('express'))();
const port = 3000;

const compiler = Webpack(config);
app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true},
    lazy: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
}));
app.use(WebpackHotMiddleware(compiler));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

app.listen(port);