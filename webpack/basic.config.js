var path = require('path')
var relativeAssetsPath = '../dist/js'
var assetsPath = path.join(__dirname, relativeAssetsPath)

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools.config'))

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      './src/index.js'
    ]
    // ,
    // vendor: [
    //   'immutable',
    //   'history',
    //   'react',
    //   'react-bootstrap',
    //   'react-dom',
    //   'react-redux',
    //   'redux',
    //   'redux-router',
    //   'redux-thunk',
    //   'superagent-bluebird-promise',
    //   'superagent-no-cache'

    // ],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        cacheDirectory: true
      }
    }, {
      test: /\.css$/,
      loaders: [
        "style/useable",
        "css?modules&importLoaders=1&sourceMap&localIdentName=[local]___[hash:base64:5]",
        "autoprefixer?browsers=last 2 version"
      ]
    }, {
      test: /\.scss$/,
      loaders: [
        "style/useable",
        "css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]",
        "autoprefixer?browsers=last 2 version",
        "sass?outputStyle=expanded&sourceMap"
      ]
    }, {
      test: webpackIsomorphicToolsPlugin.regular_expression('images'),
      loader: 'url-loader?limit=10240'
    }, {
      test: /\.json$/, loader: 'json-loader'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    alias: {
      // resolve the issue:
      // Cannot resolve module 'ie' in node_modules/superagent-no-cache
      // https://github.com/johntron/superagent-no-cache/issues/11
      'ie': 'component-ie'
    },
    extensions: ['', '.json', '.js']
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    // 'react': 'React'
  }
}