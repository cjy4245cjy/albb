import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from "extract-text-webpack-plugin"

import config from '../../config'

const paths = config.get('utils_paths')
const globals = config.get('globals')

const webpackConfig = {
  entry: {
    app: [
      paths.src('./index.js')
    ],
    vendor: config.get('vendor_dependencies')
  },
  output: {
    filename: '[name].js',
    path: paths.dist(''),
    publicPath: ' /'
  },
  plugins: [
    new webpack.DefinePlugin(config.get('globals'), {
      __CLIENT__ : true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template : paths.src('index.html'),
      hash     : true,
      filename : 'index.html',
      minify   : globals.__PROD__ ? {} : false,
      inject   : 'body'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    noParse: /node_modules\/quill\/dist/,
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&-minimize!' + 'postcss-loader!' + 'less?sourceMap'
        )
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&-minimize!' + 'postcss-loader'
        )
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap&-minimize!' + 'postcss-loader!' + 'sass?sourceMap'
        )
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]'
        ]
      },
      { test: /\.woff(\?.*)?$/,     loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?.*)?$/,    loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2" },
      { test: /\.ttf(\?.*)?$/,      loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?.*)?$/,      loader: "file-loader?prefix=fonts/&name=[path][name].[ext]" },
      { test: /\.svg(\?.*)?$/,      loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml" }
    ]
  },
  eslint: {
    configFile: paths.project('.eslintrc'),
    failOnError: globals.__PROD__,
    emitWarning: globals.__DEV__
  }
}

export default webpackConfig
