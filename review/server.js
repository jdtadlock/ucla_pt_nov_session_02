var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 5000;

// var test = '' || 0 || false || undefined || 100;
// console.log(test);

// console.log(path.join(__dirname, 'views/index.html'))

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var data = [
  {
    name: 'JD',
    age: 38
  },
  {
    name: 'Bob',
    age: 99
  },
  {
    name: 'Sarah',
    age: 27
  }
];

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/data', function(request, response) {
  response.send(data);
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});