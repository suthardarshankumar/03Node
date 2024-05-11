const http = require('http');

const server = http.createServer(function (req, res) {
    res.end("Hello Bro")
})

server.listen(3000);

//localhost:3000