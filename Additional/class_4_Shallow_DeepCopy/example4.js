// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// sum.count = 10; // Possible

// //Anonymous fn
// const sum = function () {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }


// //Arrow function
// const sum = () => {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }



//Higher Order function example- 1
const compute = (fn, a, b) => {
    return fn(a, b);
}



const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const res1 = compute(add, 10, 5);
const res2 = compute(subtract, 10, 5);
const res3 = compute(multiply, 10, 5);
const res4 = compute(divide, 10, 5);

console.log(res1, res2, res3, res4);


// Higher order function example-2
function x(a) {
    return function y(b) {
        return a + b;
    }
}



// Higher order function example-3
const arr1 = [1, 2, 3];
arr1.forEach((item, index) => {
    console.log(item, index);
})