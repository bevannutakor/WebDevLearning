//http server boilerplate
const http = require('http');
const https = require('https');

const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
})

const data = JSON.stringify({
    todo: "Buy Groceries"
})

const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
    },
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
  
    res.on('data', d => {
      process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error(error);
})

req.write(data);
req.end()
  

server.listen(port, () => {
    console.log(`Listening at ${port}`)
})