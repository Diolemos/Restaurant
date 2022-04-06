const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'EuroGrill'
        })
    ],
    module: {
        rules: [ {test: /\.js$/,
        exclude: /mode_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }},{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
            

        ]
    }
}