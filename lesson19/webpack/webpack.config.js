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
        })
    ]


};

