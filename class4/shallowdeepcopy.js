const obj = {
    A: "guru",
    B: "Shravan",
    C: {
        firstname: "Vaibhav",
        lastname: "pratab",
    },
    D: function abc() {
        console.log("abc");
    }
};

//shallow copy
const obj1 = { ...obj };// C ==> Same ref
const obj2 = Object.assign({}, obj);

obj2.C.firstname = "uttam";
obj2.A = "sharma";
console.log("obj", obj);
console.log("obj2", obj2);


const obj3 = JSON.parse(JSON.stringify(obj));
obj3.C.firstname = "uttam-1";
obj3.A = "sharma-1";
console.log("obj", obj);
console.log("obj3", obj3);

// polyfill for deepcopy of array or object
// const superClone = (object) => {
//     const cloning = Array.isArray(object) ? [] : {};

//     //1. if value of key is array
//     //2 . if value of key is object
//     //3. if value of key is neither array nor object
//     for (let prop in object) {
//         if (Array.isArray(object[prop])) {
//             //1. if value of key is array
//             cloning[prop] = [];
//             // {arr: [1,2,[3,4]]}
//             for (let i = 0; i < object[prop].length; i++) {
//                 if (Array.isArray(object[prop][i]) || typeof object[prop][i] === "object") {
//                     cloning[prop][i] = superClone(object[prop][i]);
//                 } else {
//                     cloning[prop][i] = object[prop][i];
//                 }
//             }
//         } else if (typeof object[prop] === "object") {
//             //2 . if value of key is object
//             cloning[prop] = superClone(object[prop]);
//         } else {
//             //3. if value of key is neither array nor object

//         }
//     }
//     return cloning;
// }

const superClone2 = (object) => {
    const cloning = Array.isArray(object) ? [] : {};

    //1. if value of key is array
    //2 . if value of key is object
    //3. if value of key is neither array nor object
    for (let prop in object) {
        if (Array.isArray(object[prop])) {
            //1. if value of key is array
            cloning[prop] = superClone2(object[prop]);
        } else if (typeof object[prop] === "object") {
            //2 . if value of key is object
            cloning[prop] = superClone2(object[prop]);
        } else {
            //3. if value of key is neither array nor object
            cloning[prop] = object[prop];
        }
    }
    return cloning;
}

const obj4 = superClone2(obj);
obj4.C.firstname = "uttam-4";
obj4.D = function bce() {
    console.log("bce");
}
obj4.A = "sharma-1";
console.log("obj", obj);
console.log("obj4", obj4);
console.log(obj.D);
console.log(obj4.D);