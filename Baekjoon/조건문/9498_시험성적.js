const fs = require('fs');
const input = fs.readFileSync(__dirname + '../../example.txt').toString();
/* 백준용 */
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const A = parseInt(input);

if (A >= 90) {
  console.log("A");
} else if (A >= 80) {
  console.log("B");
} else if (A >= 70) {
  console.log("C");
} else if (A >= 60) {
  console.log("D");
} else {
  console.log("F");
}