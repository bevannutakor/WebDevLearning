const http = require('http');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var url = req.url;

    if(url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else if(url === '/about'){
        fs.createReadStream(__dirname + '/about.html').pipe(res)
    } else if(url === '/contact'){
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    } else {
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
})

server.listen(port, () => {
    console.log(`Listening to port ${port}`);
})