// import * as fs from 'fs';
// OR
const fs = require("fs");


// console.log("Before");
// const buffer = fs.readFileSync('./f1.txt');
// console.log(buffer.toString());
// console.log("After");


// Callback-- passed param
// readFile -- HOF
// console.log("Before");
// const buffer = fs.readFile('./f1.txt', function (err, data) {
//     console.log("" + data);
// });
// console.log(buffer);
// console.log("After");

// Not a good idea to read in sync since files can be big
// console.log("Before");
// const buffer1 = fs.readFileSync('./f1.txt');
// const buffer2 = fs.readFileSync('./f2.txt');
// console.log("" + buffer1 + "\n" + buffer2);
// console.log("After");

// console.log("Before");
// const buffer1 = fs.readFile('./f1.txt');
// const buffer2 = fs.readFile('./f2.txt');
// console.log("" + buffer1 + "\n" + buffer2);
// console.log("After");


// console.log("Before");
// fs.readFile("./f1.txt", f1cb);

// function f1cb(err, data) {
//     let content1 = data;
//     fs.readFile("./f2.txt", f2cb);
//     function f2cb(err, data) {
//         let content2 = data;
//         console.log("" + content1 + "\n" + content2);
//     }
// }
// console.log("After");


console.log("Before");

fs.readFile("./f1.txt", function (err, data) {
    console.log("" + data);
});
fs.readFile("./f2.txt", function (err, data) {
    console.log("" + data);
});

console.log("After");


