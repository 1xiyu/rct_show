const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.dev');
const  app = express();
const compiler = webpack(config);
const path = require('path');
const commonPath = path.resolve(__dirname, '..');

// TODO:// why noInfo no useful ?
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  quiet: true
});

// serve webpack bundle output
app.use(devMiddleware);

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('../template'));

// resolve browserHistory
app.get('*', function (request, response){
  response.sendFile(path.resolve(commonPath, 'dist', 'index.html'))
})

app.listen(3000, () => console.log('React app listening on port 3000!'));

