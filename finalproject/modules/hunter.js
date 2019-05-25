var random = require("./random.js");
var Grass = require('./Grass');
var Xotaker = require('./Xotaker');
var Gishatich = require('./Gishatich');
module.exports = class Hunter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3]
        ];
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3]
        ];

    }
    chooseCell(character) {
        this.getNewDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }
    hunt() {
        var food = random(this.chooseCell(3));
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1);
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy += 3;
        }
        else {
            var food1 = random(this.chooseCell(2));
            if (food1) {
                var newX = food1[0];
                var newY = food1[1];
                matrix[newY][newX] = 4;
                matrix[this.y][this.x] = 0;

                for (var i in xotakerArr) {
                    if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                        xotakerArr.splice(i, 1);
                    }
                }

                this.x = newX;
                this.y = newY;
                this.energy += 3;

            }
            else {
                var food2 = random(this.chooseCell(1));
                if (food2) {
                    var newX = food2[0];
                    var newY = food2[1];
                    matrix[newY][newX] = 4;
                    matrix[this.y][this.x] = 0;

                    for (var i in grassArr) {
                        if (grassArr[i].x == newX && grassArr[i].y == newY) {
                            grassArr.splice(i, 1);
                        }
                    }

                    this.x = newX;
                    this.y = newY;
                    this.energy += 2;
                }
                else {
                    this.moveNjump()
                }
            }

        }

    }
    moveNjump() {
        var empty = random(this.chooseCell(0));

        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy -= 3;
        }
        else{
        	 var empty1 = random(this.chooseCell(1))

        if (empty1) {
            var newX = empty1[0]
            var newY = empty1[1]
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 1;
            grassArr.push((new Grass(this.x, this.y, 1)))
            this.x = newX
            this.y = newY
  			this.energy -= 3;
        }

    }
        }

    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy >=35) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            var hu = new Hunter(newX, newY);
            hunterArr.push(hu);
            this.energy-=25
        }
        else{
        	var found = random(this.chooseCell(1));
        	if(found && this.energy >=35){
        	 var newX = found[0]
            var newY = found[1]
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
                
            }
            matrix[newY][newX] = 4
            var hu = new Hunter(newX, newY);
            hunterArr.push(hu);
            this.energy-=25
        	}
        }
    }
   
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in hunterArr) {
                if (hunterArr[i].x == this.x && hunterArr[i].y == this.y) {
                    hunterArr.splice(i, 1);
                }
            }

        }
    }
}
