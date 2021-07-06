const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {
  console.log(req.url)
  res.writeHead(200)
  fs.createReadStream(__dirname + '/index.html').pipe(res)
  // res.end('hello lzc')
}).listen(4000)