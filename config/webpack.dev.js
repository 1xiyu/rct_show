const config = require('./webpack.base');

const webpack = require('webpack');

config.plugins.push(new webpack.HotModuleReplacementPlugin());

config.mode =  'development';

config.entry.push('webpack-hot-middleware/client');

config.devtool = 'cheap-module-eval-source-map';

const process = require('process');

module.exports = config;