/**
 * @author Bilal Cinarli
 */

'use strict';

const webpack         = require('webpack');
const config          = require('./app.config');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const devConfig = {
    context:     config.source,
    entry:       {
        'js': [
            'webpack-dev-server/client?http://localhost:8081/',
            './scripts/index.js'
        ]
    },
    output:      {
        filename:   config.filenames.js,
        path:       config.paths.app,
        publicPath: config.paths.public
    },
    module:      {
        rules: [
            config.rules.eslint,
            config.rules.babel,
            config.rules.sass
        ]
    },
    resolve:     {
        modules:    [
            'node_modules',
            'bower_components',
            config.source
        ],
        extensions: ['.js', '.json', '.scss', '.css']
    },
    devtool:     'eval-source-map',
    performance: {
        hints: false
    },
    devServer:   {
        publicPath:         config.paths.public,
        contentBase:        config.paths.content,
        historyApiFallback: true,
        port:               8081
    },
    plugins:     [
        new StyleLintPlugin(),
        new webpack.DefinePlugin({
            '__DEV__':     true,
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
};

module.exports = devConfig;
