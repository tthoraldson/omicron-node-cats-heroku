var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));

// data array
var cats = [{name: 'Luna', trait: 'Fiesty'}];

// Routes
app.get('/cat', function(req, res) {
  res.send(cats);
});

app.post('/cat', function(req, res) {
  console.log('request: ', req.body);
  cats.push(req.body);
  res.sendStatus(201);
});

// serve static files
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});
