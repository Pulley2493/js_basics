// let num = 10;

// function b() {
//     console.log(num);
// }
// function fn() {
//     let num = 20;
//     b();
//     console.log(num);
// }

// fn();




// function fn2() {
//     let num = 20;
//     console.log(num);
//     // its memory + lexical scope memory
//     function b2() {
//         console.log(num);
//     }
//     // b2();
//     // console.log(num);
//     return b2;
// }

// // const returnedFN = fn2();
// // returnedFN();

// fn2()();

// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count;
//     }
//     return innerFunction;
// }

// const innerFunc = outerFunction();
// console.log(innerFunc()); // 1
// console.log(innerFunc()); // 2
// console.log(innerFunc());

// const innerFunc1 = outerFunction();
// console.log(innerFunc1());
// console.log(innerFunc1());
// console.log(innerFunc1());


// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }

// const e1 = createCounter(10, 5);
// console.log(e1());
// console.log(e1());


// const e2 = createCounter(10, 5);
// console.log(e2());

// let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I got your first name");
//     return function getLastName(lastName) {
//         console.log("I got last name");
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);
//             console.log(`I have acces to ${iamINGEC}`);
//         }
//     }
// }

// const firstName = getFirstName("Ram");
// console.log(firstName);
// const lastName = firstName("Shyam");
// console.log(lastName);
// const greet = lastName();

// getFirstName("Guru")("Kumar")();

// function a(d) {
//     return function b(e) {
//         return function c(f) {
//             return d + e + f;
//         }
//     }
// }

// function xyz(sum) {
//     const add = function (x) {
//         if (!x) return sum;
//         sum += x;
//         return add;
//     }
//     return add;
// }

// console.log(a(2)(3)(4));
// console.log(xyz(10)(20)(30)(100)());




// // setTimeout (HOF)
// // whatever function u pass it down it executes after some delay
// // setTimeout(fn, delay)

// let abc = 10;
// console.log("Before");
// function cb() {
//     console.log("I will explode ", abc);
// }

// setTimeout(cb, 0);
// console.log("After");


// function outer() {
//     let arrFn = [];
//     // let i = 0;
//     for (let i = 0; i < 3; i++) { // try using var
//         // block level scope
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }

// const arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();


//counter(0);
//counter()(0); // op:2



// function counter(x) {
//     if (x == 0) return 0;
//     let freq = 1;
//     function count(y) {
//         if (y === 0) return freq;
//         freq++;
//         return count;
//     }
//     return count;
// }

// console.log();
// console.log(counter(0));
// console.log(counter()()()(0));

// function counter(args) {
//     let count = 0;
//     if (args === 0) {
//         return count;
//     } else {
//         return function innerCounter(args) {
//             count++;
//             if (args == 0) return count;
//             else return innerCounter;
//         }
//     }
// }

// console.log(counter(0));
// console.log(counter()(0));
// console.log(counter()()(0));


// function counter(args) {
//     let count = 0;
//     if (args === 0) {
//         return count;
//     } else {
//         count++;
//         return counter;
//     }
// }

// console.log("------")
// console.log(counter(0));
// console.log(counter()(0));
// console.log(counter()()(0));


function calc(n) {
    let sum = 0;
    for (let i = 0; i < n; i++)sum += n;
    return sum;
}

function subtract(n) {
    let sum = 0;
    for (let i = 0; i < n; i++)sum -= n;
    return sum;
}

// console.log(calc(10));
// console.log(calc(3));


//create a memoized function
function memoize(fn) {
    let obj = {};
    return function (x) {
        if (!obj[x]) obj[x] = fn(x);

        return obj[x];
    }
}

const optimizedFn = memoize(calc);

console.log(optimizedFn(10));
console.log(optimizedFn(3));
console.log(optimizedFn(10));
console.log(optimizedFn(3));


// function calcWithClos(n) {
//     let sum = 0;
//     function add() {
//         if (sum === n * n) return sum;
//         sum += n;
//         return add;
//     }
//     return add;
// }

// console.log(calcWithClos(4)()()()()());



// private variable 

function createEventStack() {
    let items = [];
    return {
        // 3 closures - push, pop, getValue
        push(item) {
            if (item % 2 === 0) {
                items.push(item);
                console.log("PUSHED");
            } else {
                console.log("please push even no");
            }
        },
        pop() {
            return items.pop();
        },
        getValue() {
            return JSON.parse(JSON.stringify(items));
        }
    }
}

// explore if possible to use class for same kind


const stack = createEventStack();
stack.push(4);
stack.push(2);
stack.push(6);
console.log(stack.pop());
console.log(stack.pop());
// stack.pop();
// stack.pop();


// try without any last indicator
function applySum(val) {
    let totalVal = val;
    return function sum(val) {

        if (val) {
            totalVal += val;
            return sum;
        } return totalVal;
    }
}

console.log(applySum(1)(2)(34)())
// applySum(1)(2)(34)();
