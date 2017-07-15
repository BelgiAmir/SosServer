// grab the packages we need
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/api/isAlive', function(req, res) {
  res.send("Yeah Baby!");
});


app.post('/api/add', function(req, res) {
  console.log('submmiting report');
  console.log(req.body);

  var jsonfile = require('jsonfile');

  var fileName = './testResults/' + req.body.fileName;
  var obj = { 'stage': req.body.body };

  jsonfile.writeFileSync(fileName, obj, { flag: 'a' }, function (err) {
    console.error(err)
  });
  res.end("Good ");
  return fileName;
});

var port = process.env.PORT || 8080;

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
