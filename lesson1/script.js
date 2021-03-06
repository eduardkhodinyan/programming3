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
 // var matrix = [
 //  [0,0,0,0],
 //  [0,0,5,0],
 //  [0,0,0,0],
 //  [0,0,0,0]
 // ]





var side = 30;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var hunterArr = [];
var godArr = []
function setup() {
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
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#da7cff");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            rect(x * side, y * side, side, side)

            /*fill("blue")
                text(x + " " + y, x * side + side / 2, y * side + side / 2)
            */
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()


    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].mult()
        gishatichArr[i].move()
        gishatichArr[i].die()
        
        }

    for (var i in hunterArr) {
        hunterArr[i].hunt()
        hunterArr[i].mult()
        //hunterArr[i].moveNjump()
        hunterArr[i].die()
        }
    for(var i in godArr){
    	godArr[i].revive()
    	godArr[i].move()
        
    }
}
