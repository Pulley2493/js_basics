//var let and const

// 1.Scopr
// var: function scope, let: block scope
// {} : 1 block

// function testVar() {

//     if (true) {
//         var a = 10;
//     }
//     console.log(b);

// }

// console.log(a);
// testVar();
// console.log(a);


// function testLet() {
//     if (true) {
//         let a = 10;
//         console.log(a);
//     }

//     // console.log(a);
// }

// console.log(a);
// testLet();
// console.log(a);


// 2.Redeclaration 

// var: yes, let and const: no

var x = 1;
var x = 2;

console.log(x);

// let y = 1;
// let y = 2;


// 3.Reassignment
// var,let = yes, const = no

const z = 5;
z = 20;
console.log(z);

