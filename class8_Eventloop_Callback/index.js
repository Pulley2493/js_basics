
// Synchronous code that executes line by line
// console.log("Before");

// function fn() {
//     console.log("I am fn");
// }

// fn();
// console.log("After");


// Async Code
/**
 * Asynchronous code -> code thats executed at the current point of time
 * and other piece of code is executed on later point
 */
// console.log("Before");

// function fn() {
//     console.log("I am fn");
// }

// setTimeout(fn, 1);
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After"); console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");

// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After"); console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");

// for (let i = 0; i < 100000000000000; i++)console.log("loop[");


// eg-3
// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);

// console.log("After");

// while (a) {
// };


// eg -4
// let a = true;
// console.log("Before");
// setTimeout(() => {
//     a = false;
//     console.log("I broke the while loop");
// }, 1000);

// console.log("After");

// while (a) {
//     a = false;
// };


// eg-5
// console.log("Before");
// const cb2 = () => {
//     console.log("Set timeout 1");
//     while (1) { }
// };
// const cb1 = () => console.log("hello");
// setTimeout(cb2, 1000);
// setTimeout(cb1, 2000);
// console.log("After");

// eg-6
// console.log("Before");
// const cb2 = () => {
//     console.log("Set timeout 1");
//     // while (1) { }
// };
// const cb1 = () => console.log("hello");
// setTimeout(cb2, 1000);
// setTimeout(cb1, 2000);
// console.log("After");


//eg-7
// console.log("Before");
// const cb2 = () => {
//     console.log("Set timeout 1");
//     // while (1) { }
// };
// const cb1 = () => console.log("hello");
// setTimeout(cb2, 2000);
// setTimeout(cb1, 2000);
// console.log("After");


// eg-8
// console.log("Before");
// const cb2 = () => {
//     console.log("Set timeout 1");
//     // while (1) { }
// };
// const cb1 = () => console.log("hello");
// setTimeout(cb2, 3000);
// setTimeout(cb1, 2000);
// console.log("After");



console.log("Before");
const cb2 = () => {
    console.log("Set timeout 1");
    console.log(Date.now());
    let timesInFuture = Date.now() + 5000;
    console.log(timesInFuture);
    while (Date.now() < timesInFuture) {
        console.log(Date.now(), 'Checking ');
    }
};

const cb1 = () => console.log("Hello");
setTimeout(cb2, 1000);
setTimeout(cb1, 2000);

console.log("After");



