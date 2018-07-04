const path = require('path');
const commonPath = path.resolve(__dirname, '..');

const util = require('./util');
const plugins = util.getPlugins();
const rules = util.getRules();

module.exports = {
    entry: path.join(commonPath, 'src/app.jsx'),
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.join(commonPath, 'dist')
    },
    module: { rules },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          REDUX: path.join(commonPath, 'src/redux')
        }
    },
    plugins
}