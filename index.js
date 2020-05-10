// const app = express();
// app,engine('handlebars', hbars({defaultLayout: false}));
// app.set('view engine', 'handlebars');
// app.set('port', process.env.PORT || 3000);
// app.use(bodyParser.urlencoded({extended: true}));

const all = require("./data.js");
const bicycles = require("./data.js");
bicycles.bicycle;
all.getAll();
const http = require("http"); 
http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
  // app.get('/', function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("Array length: " + bicycles.length);
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
  
    // app.get('/', (req, res) => {
    //   res.render('home', {bicycles.getAll()})
    // } 
    
    // app.get('/detail', (req, res) => {
    //   res.render('detail', {bicycles: req.query.item});
    // }
    // app.use((req, res) => {
    //   res.type('text/plain');
    //   res.status(404);
    //   res.send('404 Error - Not Found');
    // }

}).listen(process.env.PORT || 3000);
//     app.listen(app.get('port'), () => {
//     console.log('Express startup");')
// });
// })