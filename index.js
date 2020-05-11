const express = require('express');
const bicycle = require("./data.js");
const getAll = require('./data.js');
const app = express();
const array = bicycle;
const gall = getAll;
const n = array.length;


// app,set('handlebars', hbars({defaultLayout: false}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.type('text/plain');
  res.send(array);
});
app.get('/about', function(req, res){
  res.type('text/plain');
  res.send('about');
});
app.get('/detail', function(req, res){
  res.type('text/plain');
  res.send('detail');
});

app.use(function(req, res){
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