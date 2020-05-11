'use strict'
const express = require('express');
const exphb = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const bicycle = require('./data.js');
const getAll = require('./data.js');
const app = express();
const array = bicycle;

app.engine('handlebars', exphb( {
  extname: 'exphb',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/pages/',
  partialsDir: __dirname + '/views/partials'
}));
// app.set('handlebars', handlebars({defaultLayout: false}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.type('text/plain');
  res.send([array.length]);
});
app.get('/about', function(req, res){
  res.type('text/plain');
  res.send('Hi, I%m a database developer!');
});
app.get('/detail', (req, res) => {
  res.type('text/plain');
  res.send('Watch this space.');
});

app.use( (req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - not found')});

app.listen(app.get('port'), function(){
  console.log('Express server started');
});


// const app = express;

// 
// const all = require("./data.js");
// const bicycles = require("./data.js");
// bicycles.bicycle;
// all.getAll();