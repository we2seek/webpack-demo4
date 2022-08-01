const path = require('path');
let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}
console.log(`=== ${mode.toUpperCase()} MODE ===\n`);
module.exports = {
    mode: mode,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

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
    },
}