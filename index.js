'use strict'
const exphbs = require('express-handlebars');
const express = require('express');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');
const bicycle = require('./data.js');
const getAll = require('./data.js');
const app = express();

app.engine('handlebars', exphbs( {
  extname: 'exphbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/pages/',
  partialsDir: __dirname + '/views/partials'
}));
app.set('handlebars', handlebars[{defaultLayout: false}]);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.type('text/plain');
  res.render('home');
  res.send([bicycle.length]);
});
app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('Hi, I%m a database developer!');
});
app.get('/detail?item[VALUE]', (req, res) => {
  res.type('text/plain');
  res.send('Watch this space.');
});

app.use( (req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - not found')});

app.listen(app.get('port'), () => {
  console.log('Express server started');
});

