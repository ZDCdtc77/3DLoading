var webpack = require('webpack');

module.exports = {
    devtool: '#source-map',
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
        },{
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader', options: {
                    sourceMap: true
                }
            }, {
                loader: 'less-loader', options: {
                    sourceMap: true
                }
            }]
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
