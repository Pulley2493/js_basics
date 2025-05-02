const obj1 = {
    name: "Arunava",
    address: {
        city: "Kolkata",
        state: "West Bengal",
        country: "India"
    }
}
console.log(obj1);

//Shallow Copy
const obj2 = {
    ...obj1,
}
obj2.name = "Nithish";
obj2.address.city = "Delhi";

console.log(obj2);
console.log(obj1);

//Shallow Copy
const obj3 = Object.assign({}, obj1);
obj3.name = "Pulkit";
obj3.address.city = "Mumbai";

console.log(obj3);
console.log(obj1);

//Deep Copy
obj4 = { ...obj1, address: { ...obj1.address } };
obj4.name = "Deep";
obj4.address.city = "Galaxy";
console.log(obj4);
console.log(obj1);


obj5 = JSON.parse(JSON.stringify(obj1));
obj5.name = "DeepAnother";
obj5.address.city = "MilkyWay";
console.log(obj5);
console.log(obj1);

const obj6 = {
    name: "ABC",
    address: {
        city: "X",
        state: "Y",
        country: "Z"
    }
}

let flatten = function (obj, prefix = "") {
    let linearObj = {};
    for (let key in obj) {
        let prefixTill = prefix ? prefix + "." + key : key;
        if (typeof obj[key] === 'object') {

            linearObj = { ...linearObj, ...flatten(obj[key], prefixTill) };
        } else {
            linearObj[prefixTill] = obj[key];
        }
    }
    return linearObj;
}

console.log(flatten(obj1));



