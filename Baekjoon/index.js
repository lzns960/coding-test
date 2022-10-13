const fs = require('fs');
const input = fs.readFileSync(__dirname + '/example.txt').toString().split(' ');

let chess = [1, 1, 2, 2, 2, 8];

let answer = input.map((i, index) => {
  return chess[index] - i;
})

console.log(...answer)