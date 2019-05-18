//! Setting global arrays  --  START
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var hunterArr = [];
var godArr = [];
matrix = [];
//! Setting global arrays  -- END



//! Requiring modules  --  START
var grass = require('/modules/grass.js');
var grasseater = require('/modules/eatgrass.js');
var predator = require('/modules/predator.js');
var hunter = require('/modules/hunter.js');
var god = require('/modules/god.js');
//! Requiring modules  --  END
//server code start
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io');

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);
// server code end
//! Creating MATRIX -- START
let matrix = []; // Մատրիցի ստեղծում
let rows = 20; // Տողերի քանակ
let columns = 20; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
   matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
   for (let x = 0; x < columns; x++) {
      let a = Math.floor(Math.random() * 100);
      if (a >= 0 && a < 20) {
         matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
      }
      if (a >= 20 && a < 60) {
         matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
      }
      else if (a >= 60 && a < 80) {
         matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
      }
      else if (a >= 80 && a < 98) {
         matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
      }
      else if (a >= 98 && a < 99) {
         matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
      }
      else if (a >= 99 && a < 100) {
         matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
      }
   }
}
//! Creating MATRIX -- END

function creatingObjects() {
   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
         if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
         }
         else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
         }
         else if (matrix[y][x] == 3) {
            var gi = new Gishatich(x, y)
            gishatichArr.push(gi)
         }
         else if (matrix[y][x] == 4) {
            var hu = new Hunter(x, y)
            hunterArr.push(hu)
         }
         else if (matrix[y][x] == 5) {
            var go = new God(x, y)
            godArr.push(go)
         }
      }
   }
}
   creatingObjects();

function game() {
   if (grassArr[0] !== undefined) {
      for (var i in grassArr) {
         grassArr[i].mul();
      }
   }
   if (xotakerArr[0] !== undefined) {
      for (var i in xotakerArr) {
         xotakerArr[i].eat()
         xotakerArr[i].move()
         xotakerArr[i].mult()
         xotakerArr[i].die()
      }
   }
   if (gishatichArr[0] !== undefined) {
      for (var i in gishatichArr) {
         gishatichArr[i].eat()
         gishatichArr[i].move()
         gishatichArr[i].mult()
         gishatichArr[i].die()
      }
   }
   if (hunterArr[0] !== undefined) {
      for (var i in hunterArr) {
         hunterArr[i].hunt()
         hunterArr[i].mult()
         hunterArr[i].die()
      }
   }
   if (godArr[0] !== undefined) {
      for (var i in godArr) {
         godArr[i].revive()
         godArr[i].move()
      }
   }
   //! Object to send
   let sendData = {
      matrix: matrix
   }

   //! Send data over the socket to clients who listens "data"
   io.sockets.emit("data", sendData);
}



setInterval(game, 1000)