
var side = 30;
var socket = io()



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

    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function createcreature() {
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
        hunterArr[i].die()
    }
    for (var i in godArr) {
        godArr[i].revive()
        godArr[i].move()

    }
}
