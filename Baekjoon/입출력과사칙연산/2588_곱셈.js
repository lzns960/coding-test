const fs = require('fs');
const input = fs.readFileSync(__dirname + '../../example.txt').toString().split('\n');
/* 백준용 */
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = input[1];


// 1. 문자열의 index로 가져오는방법
console.log(A * parseInt(B[2]));
console.log(A * parseInt(B[1]));
console.log(A * parseInt(B[0]));
console.log(A * B);

/*
// 2. 배열로 가져오는방법
const arr = [...B];
console.log(A * parseInt(arr[2]));
console.log(A * parseInt(arr[1]));
console.log(A * parseInt(arr[0]));
console.log(A * B);
*/