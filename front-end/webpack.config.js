const webpack = require('webpack')
const modoDev = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/input.js',
    output: {
        filename: 'input.js',
        path: __dirname + '/js'
    },
    devServer: {
        contentBase: "./",
        port: 9000
    }
}