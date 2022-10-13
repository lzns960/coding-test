const fs = require('fs');
const input = fs.readFileSync(__dirname + '../../example.txt').toString();
/* 백준용 */
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(input);

const fuckingYear = A

if (A % 4 === 0 && A % 100 !== 0) {
  console.log(1);
} else if (A % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
/*
1. 4의 배수 & 100의 배수가 아니
2. 400의 배수
*/

