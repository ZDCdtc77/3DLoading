var webpack = require('webpack');

module.exports = {
    entry: {
        triloading:'./src/index.js',
        vendor:['three','babel-polyfill']
    },
    output: {
        path: __dirname,
        filename: './release/[name].js',
        library: 'triloading',
        libraryExport: "default",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendor",
                    chunks: "initial",
                }
            }
        }
    },
}
