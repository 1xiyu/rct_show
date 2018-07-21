const path = require('path');
const commonPath = path.resolve(__dirname, '..');

const util = require('./util');
const plugins = util.getPlugins();
const rules = util.getRules();

module.exports = {
    entry: [path.join(commonPath, 'src/app.jsx')],
    output: {
        filename: 'bundle.js',
        path: path.join(commonPath, 'dist')
    },
    module: { rules },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          '$src': path.join(commonPath, 'src'),
          '$views': path.join(commonPath, 'src/views'),
          '$redux': path.join(commonPath, 'src/redux'),
          '$dao': path.join(commonPath, 'src/dao'),
          '$utils': path.join(commonPath, 'src/utils')
        }
    },
    plugins
}