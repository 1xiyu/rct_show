const config = require('./webpack.base');

const webpack = require('webpack');

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.mode =  'development';

config.output.publicPath = 'http://localhost:3000/';

config.entry.push('webpack-hot-middleware/client');

config.devtool = 'cheap-module-eval-source-map';

module.exports = config;