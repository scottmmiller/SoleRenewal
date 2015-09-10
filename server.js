var Express = require("express");

// var connect = require('connect');
// var serveStatic = require('serve-static');

var app = Express();
var port = 9999;

app.use(Express.static(__dirname)).listen(port);
console.log('listening on: ' + port);
