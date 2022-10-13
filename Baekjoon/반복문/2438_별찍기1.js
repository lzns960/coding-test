const fs = require('fs');
const input = fs.readFileSync(__dirname + '../../example.txt').toString().split('\n');
/* 백준용 */
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const N = parseInt(input);

for (var i = 1; i <= N; i++) {
  const star = '*';
  console.log(star.repeat(i));
}