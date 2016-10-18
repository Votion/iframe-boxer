'use strict';

const webpack = require('webpack');
const path = require('path');
const libraryName = 'iframeBoxer';

const config = {
    entry: {
        iframeBoxer: ['./src/index']
    },
    output: {
        path: './lib',
        filename: 'index.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['.js']
    },

    externals: [
        {
            'window': 'window'
        }
    ]
};

module.exports = config;