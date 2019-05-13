var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')
var grass = require('/modules/grass.js');
var grasseater = require('/modules/eatgrass.js');
var predator = require('/modules/predator.js');
var hunter = require('/modules/hunter.js');
var god = require('/modules/god.js');

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);
