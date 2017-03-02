var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: './app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(s?)css$/,
        use: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader','sass-loader'],
            publicPath: '/dist'
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer:{
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: "errors-only",
    open: true,
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter',
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      template: './src/index.ejs'
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    })
  ]

};
