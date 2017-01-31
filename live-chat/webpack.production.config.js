/**
 * @author Bilal Cinarli
 */

'use strict';

const webpack = require('webpack');
const config  = require('./app.config');

const StyleLintPlugin = require('stylelint-webpack-plugin');

const prodConfig = {
    context: config.source,
    entry:   {
        'js': ['./scripts/index.js']
    },
    output:  {
        filename:   config.filenames.js,
        path:       config.paths.app,
        publicPath: config.paths.public
    },
    module:  {
        rules: [
            config.rules.eslint,
            config.rules.babel,
            config.rules.extract
        ]
    },
    resolve: {
        modules:    [
            'node_modules',
            'bower_components',
            config.source
        ],
        extensions: ['.js', '.json', '.scss', '.css']
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new StyleLintPlugin(),
        config.extractCSS,
        new webpack.DefinePlugin({
            '__DEV__':     false,
            '__PROD__':    true,
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            include:  /\.js$/,
            minimize: true
        })
    ]
};

module.exports = prodConfig;