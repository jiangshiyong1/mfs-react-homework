var http = require("http");
var index = 1
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(`${index}`);
    index = index++
}).listen(8888);