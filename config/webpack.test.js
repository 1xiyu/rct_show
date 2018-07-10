const config = require('./webpack.base');

const webpack = require('webpack');

config.mode = 'test';

module.exports = config;