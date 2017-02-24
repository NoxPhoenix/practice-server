var unirest = require('unirest')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.listen(8080);

app.post('/search', function (req, res) {
var searchTxt = req.body.key
  console.log(req.body.key);
  unirest.post('http://www.omdbapi.com/?')
.headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
.query({ "s": searchTxt, "type": "movie", "r": "json" })
.end(function (response) {
  res.send(JSON.stringify(response.body));
});
})
