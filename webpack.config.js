var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')
var path = require('path');
var isDevServer = process.argv.join('').indexOf('webpack-dev-server') > -1;

module.exports = {
  entry: './index.js',

  output: {
    filename: 'index.js',
    path: 'dist',
    libraryTarget: 'umd',
    publicPath: isDevServer ? '/': '/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /(node_modules\/intl)/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules\/intl)/
      },
            {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.svg$/,
        loader: 'file-loader?mimetype=image/svg'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader?mimetype=image/jpg'
      },
      {
        test: /\.png$/,
        loader: 'file-loader?mimetype=image/png&name=assets/[name].png'
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?mimetype=image/x-icon&name=assets/[name].ico'
      },
      {
        test: /\.woff$/,
        loader: 'file-loader?mimetype=application/font-woff'
      },
      {
        test: /\.otf$/,
        loader: 'file-loader?mimetype=application/font/opentype'
      },
      {
        test: /\.txt$/,
        loader: 'file-loader?mimetype=text/plain&name=[path]/[name].[ext]'
      },
      {
        test: /\.scss|\.css$/,
        loader: "file?name=assets/css/[name].css!sass?" +
          "includePaths[]=" +
            (path.resolve(__dirname, "./node_modules"))
      }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('index.js', data.routes, data)
  ]

}
