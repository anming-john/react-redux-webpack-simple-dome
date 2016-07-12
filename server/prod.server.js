import path from 'path'
import express from 'express'
import compression from 'compression'
// import servefavicon from 'serve-favicon'
import serveStatic from 'serve-static'
// import proxy from 'proxy-middleware'
import url from 'url'
import bodyParser from 'body-parser'
// import cors from 'cors'
import hostConfig from './host'
// import bird from 'bird-v2'
// import { birdConfig } from './birdfile'

const app = express()
const host = hostConfig.ip
const port = hostConfig.prodPort

const staticPath = path.resolve(path.join(__dirname, '..', 'static'))
// const faviconPath = path.join(staticPath, 'favicon.ico')
const indexPath = path.join(staticPath, 'index.html')

app.use(bodyParser.json())
app.use(compression())
// app.use(servefavicon(faviconPath))
app.use(serveStatic(staticPath))

// app.use('/api', cors())
// app.use('/api', bird(birdConfig))

app.get('/*', function(req, res) {
  res.sendFile(indexPath)
})

app.listen(port, err => {
  if (err) {
    console.error(err)
  }
  console.info('----\n==> 🎛  prod-server http://' + host + ':' + port + ' is on')
})