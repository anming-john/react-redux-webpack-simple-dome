import webpack from 'webpack'
import express from 'express'
import compression from 'compression'
// import proxy from 'proxy-middleware'
// import servefavicon from 'serve-favicon'
import serveStatic from 'serve-static'
import path from 'path'
import fs from 'fs'
import url from 'url'
import bodyParser from 'body-parser'
import cors from 'cors'
import hostConfig from './host'
// import bird from 'bird-v2'
// import { birdConfig } from './birdfile'

//const webpackDevServer = 'http://' + hostConfig.ip + ':' + hostConfig.webpackDevServerPort
import webpackConfig from '../webpack/dev.config'
const compiler = webpack(webpackConfig)


// -------- dev-server ----------------------
const app = express()
const host = hostConfig.ip
const port = hostConfig.devPort
const serverOptions = {
  //contentBase: 'http://' + host + ':' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: 'http://' + host + ':' + port + '/rframe/js',
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
}

const staticPath = path.resolve(path.join(__dirname, '..', 'dist'))
// const faviconPath = path.join(staticPath, 'favicon.ico')
const indexPath = path.join(staticPath, 'index.html')

app.use(bodyParser.json())
app.use(compression())

// app.use(servefavicon(faviconPath))

app.use(require('webpack-dev-middleware')(compiler, serverOptions))
app.use(require('webpack-hot-middleware')(compiler))

// proxy the request for static assets
//app.use('/finfa/assets', proxy(url.parse(webpackDevServer + '/finfa/assets')))

app.use(cors())
// app.use('/api', cors(), bird(birdConfig))

app.use(serveStatic(staticPath))
app.get('/*', function(req, res) {
  res.sendFile(indexPath)
})

// -------- run ----------------------
app.listen(port, err => {
  if (err) {
    console.error(err)
  }
  // replace host  to  localhost
  console.info('----\n==> 🎛  dev-server http://' + host + ':' + port + ' is on')
  // console.info('----\n==> 🎛  dev-server http://localhost' + ':' + port + '/finfa/ or http://' + host + ':' + port + '/finfa/ is on')
})