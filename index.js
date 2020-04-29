const http = require("http"); 
http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("Home Page");
      // console.log(bicycles);
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("Hello, I'm a database developer.");
      break;
    // case '/detail?item=%5BVALUE%5D':
    //     res.writeHead(200, {'Content-Type': 'text/plain'});
    //     res.end("Detail.");
    //     break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end("Not found");
      break;
    }
}).listen(process.env.PORT || 3000);