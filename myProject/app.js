
var express = require('express');
var path = require('path');
var fs= require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//Here goes your code
app.get('/', function(req, res) {
  res.render('login' );
});

app.get('/registration', function(req, res) {
  res.render('registration' );
});

app.get('/horror', function(req, res) {
  res.render('horror');
});

app.get('/string', function(req, res) {
  res.send('this is a string not and an html file');
});

app.post('/', function(req, res) {
  res.render('home');
});


app.listen(3000);
//Here your code ends
module.exports = app;
