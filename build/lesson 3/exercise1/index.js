"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// NOTE: This code has not been converted to TypeScript yet
const array_js_1 = __importDefault(require("./utilities/array.js"));
const numbers_js_1 = __importDefault(require("./utilities/numbers.js"));
const strings_js_1 = __importDefault(require("./utilities/strings.js"));
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = array_js_1.default.addArr(numArr);
const mixArr = array_js_1.default.concatArr(numArr, wordArr);
const myNum = '15' % 2;
const five = parseInt('5');
// results of function calls
console.log(array_js_1.default.cut3(mixArr));
console.log(numbers_js_1.default.sum(arrSum, myNum));
console.log(strings_js_1.default.capitalize('the quick brown fox'));
console.log(numbers_js_1.default.multiply(five, 8));
console.log(array_js_1.default.lgNum(mixArr));
