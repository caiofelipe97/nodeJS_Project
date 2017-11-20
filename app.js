var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var routesMiddleware = require('./controllers/routesMiddleware');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/assets', express.static(__dirname + '/public'));
routesMiddleware.set(app);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	 next();
	});

mongoose.connect(config.getDbConnectionString(),function(err,db){
  if(err) {
    console.log("erro: " + err);
  } else {
    console.log("Conectou no db");
  }
});


app.listen(port);