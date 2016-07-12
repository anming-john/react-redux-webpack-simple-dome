var Express = require('express')
var webpack = require('webpack')

var webpackConfig = require('./dev.config')
var compiler = webpack(webpackConfig)
var hostConfig = require('../server/host')

var host = hostConfig.ip
var port = hostConfig.webpackDevServerPort

var serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
}

var webpackDevServer = new Express()

webpackDevServer.use(require('webpack-dev-middleware')(compiler, serverOptions))
webpackDevServer.use(require('webpack-hot-middleware')(compiler))

webpackDevServer.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err)
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port)
  }
})
