//Process Module
//process events

// const x=5;
// if(x==5) console.log('x equal 5');

process.exitcode = 1;

process.on('beforeExit', () => {
  console.log('beforeExit event');
});

process.on('exit', (code) => {
  console.log(`exit event with code ${code}`);
});

//process.stdout :does not force a new line break
// process.stdout.write('hello world');

//process argv :An array containing your console arguments information for your executed process.
// console.log(process.argv)

//==================================
//path
const path = require('path');
//path.resolve
console.log(path.resolve('index.js'));

//path.normalize
console.log(path.normalize('./app//src//util/..'));
//==================================
//Event Loop

//process.nextTick :
//we instruct the engine to invoke this function at the end of the current operation,
//before the next event loop tick starts
//It's the way we can tell the JS engine to process
//a function asynchronously (after the current function), but as soon as possible, not queue it
// const fs = require('fs');

// // Mainline
// console.log('Hello, ----------- mainline');
// console.log('world. ----------- mainline');

// // end mainline / pre timers phase 1
// process.nextTick(() => {
//   console.log('nexttick --------- before event loop');
// });

// // timers phase 1
// setTimeout(() => {
//   console.log('timeout - 0s ----- Timers 1');
// }, 0);

// // timers phase 1
// setImmediate(() => {
//   console.log('immediate -------- Timers 1');
// });

// // timers phase 1
// setTimeout(() => {
//   console.log('timeout - 0s ----- Timers 1');
// }, 0);

// // begin polling phase
// fs.readFile(__filename, () => {
//   // end poll phase
//   process.nextTick(() => {
//     console.log('nexttick i/o ----- After Polling');
//   });
//   // check phase
//   setImmediate(() => {
//     console.log('immediate i/o ---- Check');
//   });
//   // timers phase 2
//   setTimeout(() => {
//     console.log('timeout i/0 0s --- Timers 2');
//   }, 0);
//   // timers phase 3
//   setTimeout(() => {
//     console.log('timeout i/0 3s --- Timers 3');
//   }, 3000);
// });

// // timers phase 4
// setTimeout(() => {
//   console.log('timeout - 5s ----- Timers 4');
// }, 5000);

// process.on('beforeExit', () => {
//   console.log('process.on ------- beforeExit');
// });
// ==================================
process.on('exit', () => {
  console.log('Print Fifth');
});

setTimeout(() => {
  console.log('Print Third');
}, 0);

process.nextTick(() => {
  console.log('Print Second');
});

console.log('Print First');

setImmediate(() => {
  console.log('Print Forth');
});
