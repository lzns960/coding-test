const fs = require('fs');
const input = fs.readFileSync(__dirname + '../../example.txt').toString().split(' ');
/* 백준용 */
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const N = parseInt(input); 

for (var i = 1; i < 10; i++) {
  console.log(N + ' * ' + i + ' = ' + N * i);
}