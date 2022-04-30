const first = require('./utilities/first');
const { lgNum, cut3 } = require('./utilities/second');

const numArr = [10, 20, 30];
const wordArr = ['cat', 'forg', 'dog'];

//sum items of an array
console.log(first.sum(numArr));
//concat two arrays
console.log(first.concat(numArr, wordArr));
//find largest num in an array
console.log(lgNum(numArr));
//delete the third item in an array
console.log(cut3(wordArr));
