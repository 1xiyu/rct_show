const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.dev');
const  app = express();
const compiler = webpack(config);
const path = require('path');
const commonPath = path.resolve(__dirname, '..');
const PORT = 3000;
const BUILDINFO = ` listening on port ${PORT} ~`;

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  // like pre version noInfo
  logLevel: 'silent',
  publicPath: config.output.publicPath 
});

// for handle fallback 
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

app.use(require('webpack-hot-middleware')(compiler));

// for mock data
app.use('/static', express.static(path.resolve(commonPath, 'src/mock')));

app.listen(PORT, () => console.log(BUILDINFO));

