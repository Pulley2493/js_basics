// const person = {
//     firstName: "suryanararyan",
//     lastName: "Reddy",
//     printFullName: function () {
//         console.log(this.firstName, this.lastName);
//     },
// }

// for each property in object you can set some permission
// like is it editable(writable) --> helps to create fibnal varioable or constant in object
// or is it emmunerable --> helps to decide whether particular prop should be available in iteration
// or is it configurable --> protect its props and function


// person.firstName = "sheela";//possible to fix these values and avoid updation

// define final in objectin strict mode it will error out
// const person = {};
// Object.defineProperty(person, "firstName", {
//     value: "suryanararyan",
//     writable: false,
// })

// person.firstName = "sheela";
// console.log(person.firstName);



// const person = {
//     firstName: { // Check if possible
//         value: "suryanararyan",
//         writable: false,
//     },
//     lastName: "Reddy",
//     printFullName: function () {
//         console.log(this.firstName, this.lastName);
//     },
// }
// // person.firstName = "sheela";
// console.log(person);



// //define enumerable keys
// const person = {};
// Object.defineProperty(person, "firstName", {
//     value: "suryanararyan",
//     writable: false,
//     enumerable: true,
// })

// Object.defineProperty(person, "lastName", {
//     value: "reddy",
//     writable: true,
//     enumerable: false,
// })

// person.firstName = "sheela";
// console.log(person.firstName);

// for (let key in person) {
//     console.log(key);
// }

// console.log(person.lastName);

// "use strict"; //toggle and check
console.log("----------------");
//define configurable
const person = {};
Object.defineProperty(person, "firstName", {
    value: "suryanararyan",
    writable: false,
    enumerable: true,
    configurable: false,
})

Object.defineProperty(person, "lastName", {
    value: "reddy",
    writable: true,
    enumerable: false,
    configurable: false,
})

person.firstName = "sheela";
console.log(person.firstName);

delete person.firstName;
console.log(person.firstName);

console.log("----------------");
for (let key in person) {
    console.log(key);
}

console.log(person.lastName);