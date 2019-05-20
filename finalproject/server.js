//! Setting global arrays  --  START
 grassArr = [];
 xotakerArr = [];
 gishatichArr = [];
 hunterArr = [];
 godArr = [];
 matrix = []; 

//! Setting global arrays  -- END
//Matrix Start
let random = require('./modules/random');
function matrixGenerator(matrixSize, grass, grassEater, grassEaterEater, waterArr, fireArr) {
   for (let i = 0; i < matrixSize; i++) {
      matrix[i] = [];
      for (let o = 0; o < matrixSize; o++) {
         matrix[i][o] = 0;
      }
   }
   for (let i = 0; i < grass; i++) {
      let customX = Math.floor(random(matrixSize)); // 0 - 39
      let customY = Math.floor(random(matrixSize));
      matrix[customY][customX] = 1;
   }
   for (let i = 0; i < grassEater; i++) {
      let customX = Math.floor(random(matrixSize));
      let customY = Math.floor(random(matrixSize));
      matrix[customY][customX] = 2;
   }
   for (let i = 0; i < grassEaterEater; i++) {
      let customX = Math.floor(random(matrixSize));
      let customY = Math.floor(random(matrixSize));
      matrix[customY][customX] = 3;
   }
   for (let i = 0; i < waterArr; i++) {
      let customX = Math.floor(random(matrixSize));
      let customY = Math.floor(random(matrixSize));
      matrix[customY][customX] = 4;
   }
   for (let i = 0; i < fireArr; i++) {
      let customX = Math.floor(random(matrixSize));
      let customY = Math.floor(random(matrixSize));
      matrix[customY][customX] = 5;
   }
}
matrixGenerator(10, 20, 11,10,1,3);
//! Creating MATRIX -- END



//! Requiring modules  --  START
var Grass = require('./modules/Grass');
var Xotaker = require('./modules/Xotaker');
var Gishatich = require('./modules/Gishatich');
var Hunter = require('./modules/Hunter');
var God = require('./modules/God');
//! Requiring modules  --  END
//server code start
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);
// server code end


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
         grassArr[i].mult();
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