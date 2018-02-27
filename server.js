var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var path = require('path');

// console.log(path.join(__dirname, 'views/index.html'));

var app = express(); // Self instantiating constructor

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
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























// // reference those data values
// function test(str, another_string, num) {
//   console.log(another_string);
// }

// // pass actual data values
// test('some string', 50, 'another');















// var obj = {
//   name: 'JD',
//   age: 38,
//   getAge: function() {

//   }
// }

// function Person(name, age) {
//   this.name = name; 
//   this.age = age;
// }

// var jd = new Person('JD', 38);
// console.log(test);


// var test = false;
// process.env.PORT = 55;
// // console.log(process.env.PORT);