var fs = require('fs'),
path = require('path'),
http = require('http');

const SERVER_PORT = 8899;

http.createServer(function (req, res) {
    let filename = path.join(__dirname, req.url);
    if (req.url != '/index.html') {
        filename = path.join(__dirname, '../', req.url)
    }
    console.log('Filename:' + filename + "\r\n");
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(SERVER_PORT);
console.log('go to http://localhost:' + SERVER_PORT + '/index.html');