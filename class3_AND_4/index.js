function fn(param1, param2, param3 = "defaultValue") {
    console.log("params are : ", param1, param2, param3);
}


fn("hi", "hello");
fn("hi", "hello", "hey");


const arr = [1, [2, 3], 3, 4, 5];
const arr2 = arr;

//push and pop
//push new element in arr at last
// pop removes last element from array
arr2.pop();
arr.push(100);
// console.log(arr2);
// console.log(arr);

let num1 = 10;
let num2 = num1;
num2 += 10;
// console.log(num1, num2);

// spead operator
// --destructuring
const arr3 = [...arr];
// arr3[1] = [3, 4, 5]

arr3[1].push(20);
arr3.push(200);
console.log("original arr", arr);
console.log("cloned arr", arr3);


const arr4 = [];
for (let i = 0; i < arr.length; i++) {
    arr4.push(arr[i]);
}


//deep clone
JSON.stringify(arr); // i am converting arr into a string
// console.log(typeof JSON.stringify(arr), JSON.stringify(arr));
console.log(Array.isArray(JSON.parse(JSON.stringify(arr))));

const arr5 = JSON.parse(JSON.stringify(arr));
arr5[1].push(200);
arr5.push(2000);
console.log("original arr", arr);
console.log("cloned arr", arr5);


const obj = {
    func: () => {
        console.log("hello");
    },
    currentDaya: new Date(),
}

const objCloned = JSON.parse(JSON.stringify(obj));

objCloned.func = () => {
    console.log("Hello cloned");
}
objCloned.currentDaya = new Date();

obj.func();
objCloned.func();


//deepclone - own function
function func(param1, ...param2) {
    console.log("hi param are", param1, param2);
}

func("hi", "hello", "hello1", "hello2");



const person = {
    name: "Steve",
    age: 30,
    greet: function () {
        return "Hello";
    }
}

console.log(person);
const personString = JSON.stringify(person);
console.log(personString);
console.log(JSON.parse(personString));


// rest, spread
// shallow copy and deep copy