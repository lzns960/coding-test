const fs = require('fs');
const input = fs.readFileSync(__dirname + '../../example.txt').toString().trim();
/* 백준용 */
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

console.log(`${input}??!`);

// 문자열 좌우에서 공백을 제거하는 함수가 trim() 함수로 input해야된다. 