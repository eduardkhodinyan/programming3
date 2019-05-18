//! Creating MATRIX -- START
var random = require("./modules/random.js");
let matrix = []; // Մատրիցի ստեղծում
module.exports = matrix
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