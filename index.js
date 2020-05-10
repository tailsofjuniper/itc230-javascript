const mod = require("./data.js");
mod.getAll();

const http = require("http"); 
http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(path);
      // want to return bicycle.length, but can't import the array. VSC says 'bicycle undefined'
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
