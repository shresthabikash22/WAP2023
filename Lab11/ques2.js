const http = require('http');
const fs = require('fs');

const serverPort = 3000;
const imagePath = 'earth.jpg'; // Replace with the actual path to your big image file

const server = http.createServer((req, res) => {
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error(`Error reading image file: ${err.message}`);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': data.length,
      });

      res.end(data);
    }
  });
});

server.listen(serverPort, () => {
  console.log(`Listening on port ${serverPort}`);
});
