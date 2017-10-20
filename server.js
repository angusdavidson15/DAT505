//Create a server with express
//A tool for HTTP services
//https://www.npmjs.com/package/express
var express = require('express');

//store the express functions to var app
var app = express();
//Create a server on localhost:5000
var server = app.listen(5000);
//host content as static on public
app.use(express.static('public'));

console.log("Node is running on port 5000...");