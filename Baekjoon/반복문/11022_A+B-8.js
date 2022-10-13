const fs = require('fs');
const input = fs.readFileSync(__dirname + '../../example.txt').toString().split('\n');
/* 백준용 */
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const T = parseInt(input[0]);

for ( var i = 1; i <= T; i++) {
  const testCase = input[i].split(' ');
  A = parseInt(testCase[0]);
  B = parseInt(testCase[1]);
  console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}

