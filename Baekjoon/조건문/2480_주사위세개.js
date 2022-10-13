const fs = require('fs');
const input = fs.readFileSync(__dirname + '../../example.txt').toString().split(' ');
/* 백준용 */
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

const arr = [A, B, C]

var result = 0;
if (A === B && B === C && C === A) {
  result = 10000 + A * 1000;
} else if ( (A === B && B !== C)|| (B === C && A !== C) || (A === C && B !== A)) {
  if (A === B) {
    result = 1000 + A *100;
  } else if (B === C) {
    result = 1000 + B *100;
  } else if (C === A) {
    result = 1000 + C *100;
  }
} else if (A !== B && B !== C && A !== C) {
  result = Math.max(...arr);
  result *= 100;
}  
console.log(result);