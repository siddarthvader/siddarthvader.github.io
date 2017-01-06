var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var Path = require('path');
var compression = require('compression');
var size = require('window-size');

var port = 8000;

app.use(compression({level: 6}));	//6 is default

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

http.listen(port, "192.168.1.124", function () {
	console.log('Acadly Front-end development server running on localhost:' + port);
});


app.get("*", function (req, res) {
	res.sendFile(__dirname + '/index.html');
});
