const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/input.js',
    output: {
        filename: 'input.js',
        path: __dirname + '/public'
    }
}