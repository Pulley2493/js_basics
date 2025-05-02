// console.log(a);

console.log(this); // window
function sum(a, b) {
    console.log(this);
    total = a + b;
}

sum(1, 2);

// console.log(total);


"use strict";
let cap = {
    name: "Steve Rogers",
    age: 100,
    sayHi: function () {
        console.log(this);
    }
}

console.log(cap.sayHi());

let sayHiFn = cap.sayHi;
console.log(sayHiFn());
let cap2 = {
    name: "Simran M"
}

cap2.sayHi = cap.sayHi;
cap2.sayHi();


let cap3 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("53", this.firstName); // Steve
        const iAmInner = function () {
            console.log("55", this.firstName); // undefined
        }
        iAmInner();
    }
}
cap3.sayHi();


// named function
function sum(a, b) {
    total = a + b;
}

// Anonymous function
const sum = function (a, b) {
    total = a + b;
}

//arrow function
const sum = (a, b) => {
    total = a + b;
}


let cap4 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("53", this.firstName); // Steve
        const iAmInner = () => {
            console.log("55", this.firstName); // Steve
        }
        iAmInner();
    }
}
cap4.sayHi();


// Super Imp
let cap5 = {
    firstName: "Steve",
    sayHi: () => {
        console.log("53", this.firstName); // undefined
        const iAmInner = () => {
            console.log("55", this.firstName); // undefined
        }
        iAmInner();
    }
}
cap5.sayHi();


let cap6 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("53", this.firstName); // Steve
        const subInner = () => {
            console.log("54", this.firstName);// Steve
            const iAmInner = () => {
                console.log("55", this.firstName); // Steve
            }
            iAmInner();
        }
        subInner();
    }
}
cap6.sayHi();

////////////////////

let ladder = {
    stop: 0,
    up() {
        this.stop++;
    },
    down() {
        this.stop--;
    },
    showStep: function () {
        console.log(this.stop);
    }
}

ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
////////////////////

let ladder2 = {
    stop: 0,
    up() {
        this.stop++;
        return this; // ladder can also be returned but not recommended
    },
    down() {
        this.stop--;
        return this;
    },
    showStep: function () {
        console.log(this.stop);
        return this;
    }
}

ladder2.up().up().up().down().showStep();


Array.prototype.myMap = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i], i, this));
    }
    return arr;
}


// call, apply bind

let cap7 = {
    firstName: "Spandana",
    sayHi: function (prefix) {
        console.log(prefix + this.firstName);
    }
}

let cap8 = {
    firstName: "Sachin"
}

cap7.sayHi('Hello '); // Spandana

let sayHiFn = cap7.sayHi;
sayHiFn('Hello '); // undefined

cap7.sayHi.call(cap8, 'Hello '); // Sachin

sayHiFn.call(cap7, 'Hello '); // Spandana
sayHiFn.call(cap8, 'Hello '); // Sachin


cap7.sayHi.apply(cap8, ['Hello ']); // Sachin
sayHiFn.apply(cap7, ['Hello ']); // Spandana
sayHiFn.apply(cap8, ['Hello ']); // Sachin


let sayHiFn2 = cap7.sayHi.bind(cap8, 'Hello ');
sayHiFn2(); // Sachin

sayHiFn2.call(cap7, 'Hello ');//Sachin