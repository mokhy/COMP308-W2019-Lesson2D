const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Server factory -- uses less memory
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye Cruel World\n');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); // not the browser log it is the terminal (console.log)
  });
