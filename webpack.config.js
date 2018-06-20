var webpack = require('webpack');

module.exports = {
    devtool: '#source-map',
    entry: {
        vendor:['three'],
        triloading:'./src/index.js',
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
