const util = require('./util');
const config = require('./webpack.test');
const webpack = require('webpack');
webpack(config, function (err, stats) {
    // 如果有编译错误，需要抛出非0的code，便于webpack捕获
    if (err) {
        util.logErrors(err);
    }
    // show build info to console
    console.log(stats.toString({
        chunks: false,
        color: true
    }));
});