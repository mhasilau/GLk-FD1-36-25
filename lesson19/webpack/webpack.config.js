const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Точка входа (где начинается сборка)
    entry: './src/index.js',

    // Точка выхода (куда будет сохранен бандл)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/components/page1/page1.html',
            filename: 'page1.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/components/page2/page2.html',
            filename: 'page2.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/components/page3/page3.html',
            filename: 'page3.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        port: 5000,
    },


};

