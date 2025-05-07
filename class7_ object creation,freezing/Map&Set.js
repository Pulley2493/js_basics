const map = new Map();

// T.C. is same for object and map
// map provides additional methods then object, different data types as keys compare to obj which just have string keys

//adding values into map

map.set("name", "Aditya");
map.set("Rollno", 20);

//access
console.log(map.get("Rollno"));

console.log(map);

//if it contains
console.log(map.has("name"));

map.delete("name");
console.log(map);

console.log(map.size);

map.clear();
console.log(map);
//set, get, has, delete, size, clear

//only stores unique values
const set = new Set();
set.add(1);
set.add(2);
set.add(2);
console.log(set.has(1));
console.log(set);
console.log(set.size);

set.delete(2);
console.log(set);
set.clear();
console.log(set);


// normal map has all keys as primitive data type
// weakmap or weakset
// keys are objects
// weak ? -> they garbage collection

console.log(".............");
// const weakMap = new WeakMap();

// let obj = { key: "value" };
// weakMap.set(obj, "some value");
// console.log(weakMap.has(obj));
// console.log(weakMap.get(obj));
// obj = null;

// if (global.gc) {
//     global.gc();// garbage collection
// }

// console.log(weakMap.has(obj));


const weakMap = new WeakMap();
// let obj = { key: "value" };
weakMap.set({ key: "value" }, "some value");
console.log(weakMap.has({ key: "value" }));
console.log(weakMap.get({ key: "value" }));

if (global.gc) {
    global.gc();// garbage collection
}

console.log(weakMap.size);


console.log("---------");

const weakset = new WeakSet();
let obj1 = { key: "value" };
weakset.add(obj1);

console.log(weakset.has(obj1));
// obj1 = { key: "value1" };

// obj1 = "random"; // error
obj1 = new String("random");

weakset.add(obj1);
console.log(weakset.has(obj1));
