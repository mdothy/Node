const http = require('http')

const PORT = 8888
const serverHandle = require('../app')
const server = http.createServer(serverHandle)

server.listen(PORT)
