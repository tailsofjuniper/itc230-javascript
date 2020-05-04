var mod = require("./data.js");
var bicycle = require("./data.js").bicycle;
// imports.getAll();
const http = require("http"); 
http.createServer((req,res) => {
  // app.get('/', function (req, res) {
  //   res.send('root')
  // })
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(bicycle);
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