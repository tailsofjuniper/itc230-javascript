var mod = require("./data.js");
// imports.getAll();
const http = require("http"); 
http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(path);
      // return bicycle.length;
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("Hello, I'm a database developer.");
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end("Not found");
      break;
    }
}).listen(process.env.PORT || 3000);