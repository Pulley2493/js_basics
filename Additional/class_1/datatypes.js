var x = 10;
console.log(x);

var y;
console.log(y);
console.log(typeof y);

let z = 1.5;
console.log(z);
console.log(typeof z);

let k = 5 / 2;
console.log(k);
console.log(typeof k);

let str = "I am good";
let name = "pulkit";
let age = 31;

let newStr = 'I am ' + age + ' years old';

console.log(str);
console.log(name);
console.log(newStr);

console.log(typeof str);
console.log(typeof name);
console.log(typeof newStr);

let isSingle = true;
let isMarried = false;

console.log(isSingle);
console.log(isMarried);

console.log(typeof isSingle);
console.log(typeof isMarried);

let flt = 23.23;
console.log(typeof flt);

var l = null;
console.log(l);
console.log(typeof l);

let person = {
    name: "Utkarsh",
    age: 31,
    isMarried: true
}

console.log(person);
console.log(typeof person);

let hobbies = ["Going to gym", "Go to a party", "Learn new concepts every day"];
console.log(hobbies);
console.log(typeof hobbies);


console.log(Array.isArray(person));
console.log(Array.isArray(hobbies));


// Functions

function fn(param1) {
    console.log("Hello world", param1);
    return "I am a value returned from the fn";
}

fn();
fn(2332);

console.log(typeof fn);

let op = fn("Ramesh");
console.log(op);
