const webpack = require('webpack');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    "module":{
        rules: [
            // {
            //     test: /\.(ts|tsx)$/,
            //     use: 'ts-loader',
            // }
        ]
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
    devServer: {
        hot: true,
        port: 5173
    }
};
