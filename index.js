const bicycles = require("./data.js");
// const all = getAll();
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.type('text/plain');
  res.send('bicycles');
});

app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('BOZO!')});

// app.use(function(req, res){
//   res.type('text/plain');
//   res.status(404);
//   res.send('404 - not found')
// });

app.listen(app.get('port'), function(){
  console.log('Express server started');
});


// const app = express;
// app,engine('handlebars', hbars({defaultLayout: false}));
// app.set('view engine', 'handlebars');
// app.set('port', process.env.PORT || 3000);
// app.use(bodyParser.urlencoded({extended: true}));
// 
// const all = require("./data.js");
// const bicycles = require("./data.js");
// bicycles.bicycle;
// all.getAll();