const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ProgressPlugin = require('simple-webpack-progress-plugin');
const path =require('path');
const commonPath = path.resolve(__dirname, '..');
/**
 * print error info
 * @param {*} errors 
 */
function logErrors(errors) {
    console.log('\nWe got compile errors:\n');
    console.log(errors);
    process.exit(1);
}

/**
 * extend plugins
 */
function getPlugins() {
    let plugins = [
        new ProgressPlugin()
    ];
    plugins.push(
        new HtmlWebpackPlugin({
            template: path.join(commonPath, 'template/index.html')
        })
    );
    return plugins;
}

/**
 * extend rules
 */
function getRules() {
    let rules = [
        { 
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader'
        },
        {
            test: /\.(less|css)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }
    ];
    return rules;
}

module.exports = {
    logErrors,
    getPlugins,
    getRules
}