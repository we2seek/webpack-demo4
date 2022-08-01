const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
// let target = 'web';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    // target = 'browserslist'
}
console.log(`=== ${mode.toUpperCase()} MODE ===\n`);
module.exports = {
    mode: mode,
    // target: target,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s[ac]|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]

            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin()
    ],

    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 8080,
        open: {
            app: {
                name: 'google-chrome',
            }
        },
        hot: true
    },
}