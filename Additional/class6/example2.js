

function x() {
    return function () {// fucntion saves the state/vars inside in function x
        console.log("Hello");
    }
}

var y = x();

function counter() {
    var count = 0;
    debugger;
    return function () {
        count++; // Closure of count
        debugger;
        return count;
    }
}

const incrementCount = counter();

incrementCount();
incrementCount();
incrementCount();
incrementCount();


// eg: 5, 7, 9, 11, 13, 15
function createCounter(init, delta) {
    var result = init;
    return function () {
        result += delta;
        return result;
    }
}

const incrementCountWithDelta1 = createCounter(1, 2);
const incrementCountWithDelta2 = createCounter(0, 3);

incrementCountWithDelta1(); // 3
incrementCountWithDelta1(); // 5
incrementCountWithDelta2(); // 3
incrementCountWithDelta2(); //6


function createCounterWithInput(init, delta) { // Keeps the previous implementation more clean to avoid side effect
    return function () {
        init += delta;
        return init;
    }
}


//Nested Closure
function x() {
    const a = 10;
    return function y() {
        const b = 30;
        return function z() {
            const c = 30;
            console.log(a + b + c);
        }
        //z(); // garbage collected since it is not returned;
    }
}

const y1 = x();
const z1 = y1();

z1();


function x() {
    const a = 10;
    function y() {
        const b = 30;
        function z() {
            const c = 30;
            console.log(a + b + c);
        }
        z(); // garbage collected since it is not returned;
    }
    y();
}


//Currying
function x(a) {
    return function y(b) {
        return function z(c) {
            console.log(a + b + c);
        }
    }
}

const y1 = x(10);
const z1 = y1(20);
z1(40);


//Ques


// function outer() {
//     let arrFn = [];
//     for (let i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }

// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();


// function outer() {
//     let arrFn = [];
//     for (var i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log(i);
//         })
//     }
//     return arrFn;
// }

// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();


function outer() {
    let arrFn = [];
    let i = 0;
    while (i < 3) {
        arrFn.push(function fn() {
            console.log(i);
        })
        i++;
    }
    return arrFn;
}

let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();



function counter(arg) {
    let count = 0;
    count++;
    if (arg === 0) return count;
    return function inner(arg) {
        count++;
        if (arg === 0) return count;
        return inner;
    }
}

console.log(counter(0));
console.log(counter());
console.log(counter());
console.log(counter()(0));
console.log(counter()()()()(0));