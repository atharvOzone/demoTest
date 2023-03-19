const http = require('http');

function server(){
    const hostname = 'localhost';
    const port = 8088;

    const app = http.createServer((req,res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello from Atharv!!');
    });

    app.listen(port,hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    })
}

server();
module.export = server;