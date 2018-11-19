var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'src/index.js')
    ],
    cache: false,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'backend.js',
        publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    externals: [nodeExternals()],
    module: {
        loaders: [{
                test: /\.(js)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, 'src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
              warnings: false, // Suppress uglification warnings
              pure_getters: true,
              unsafe: true,
              unsafe_comps: true,
              screw_ie8: true
            },
            output: {
              comments: false,
            },
          }),
    ]
};
