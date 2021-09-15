const path = require('path');
//allows html page to load JS as a script?
const HtmlWebpackPlugin = require('html-webpack-plugin');
//clears out dist after each bundle
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

    // "start": "webpack serve",
    // "build": "webpack",
    // "dev": "nodemon server.js"

module.exports = {
  mode: process.env.NODE_ENV,
  // mode: 'development',

  //may need to change entry point
  entry: {
    main: path.resolve(__dirname, './src/index.js')
    // main: path.resolve(__dirname, './src/App.jsx')
  },
  //where bundle resolves
  output: {
    //dist where production code will get built. This endpoint doesn't even exist anymore. . . 
    publicPath: '/build',
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'webpack Boilerplate',
  //     template: path.resolve(__dirname, './src/index.html'), // template file
  //     filename: 'index.html' //output file
  //   }),
  //   new CleanWebpackPlugin(),
  // ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      //for fonts
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline'
      },
      //for CSS, PostCSS(whatever that is), and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    static: {directory: path.join(__dirname, '/src')},
    compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000'
    }

 }

}