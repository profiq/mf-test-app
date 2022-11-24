const http = require('http');
const pjson = require('./package.json');
const { version : APP_VERSION } = pjson;

const { PORT = 8080 } = process.env;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello, World MF! VERSION=${APP_VERSION}`);
}

const server = http.createServer(requestListener);
console.log(`Starting server at port=${PORT}`);
server.listen(PORT, '0.0.0.0');