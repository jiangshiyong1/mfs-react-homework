var http = require("http");
var index = 1
http.createServer(function (request, response) {
    if (request.url === '/') {
       index++
    }
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(`${index}`);
}).listen(8888);