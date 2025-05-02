const sum = function (a, b = 0, c = 0) {
    //   if (!b) b = 0;
    return a + b + c;
}

console.log(sum(1, 2));
console.log(sum(1));
console.log(sum(1, 2, 3));


const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: 4,
        f: 5
    }
}

// const obj2 = obj1;
const obj2 = { ...obj1 };
obj2.a = 10;
console.log('obj1 ', obj1.a);
console.log('obj2 ', obj2.a);

obj2.d.e = 40;
console.log('obj1 ', obj1.d.e);
console.log('obj2 ', obj2.d.e);


//Eg
// const arr1 = [2, 3, 4, 6, 1];
// const arr2 = arr1;

// arr2.push(10);
// console.log('arr1 ', arr1);
// console.log('arr2 ', arr2);


// Eg
const arr1 = [2, 3, 4, 6, 1];
const arr2 = [...arr1];

arr2.push(10);
console.log('arr1 ', arr1);
console.log('arr2 ', arr2);


//Eg rest op
const obj3 = {
    a: 1,
    b: 2,
    c: 3,
}

const { b, ...rest } = obj3;
rest.k = 3;
console.log(b, rest, obj3);

// Example - 5
const arr3 = [1, 2, 3, 4, 5];
const [first, second, ...restArr] = arr3;
console.log(first, second, restArr, arr3);

// Example -6 
const computeSum = function (a, b, c) {
    return a + b + c;
}

console.log(computeSum(1, 2));
console.log(computeSum(1, 2, 3));
console.log("Pre");
console.log(computeSum(1, 2, 3, 4, 5, 6, 7));
console.log("Post");

// Example -6 
const computeSumEnahnced = function (a, ...args) {
    var sum = a;
    for (var val of args) sum += val;
    return sum;
}

console.log(computeSumEnahnced(1, 2));
console.log(computeSumEnahnced(1, 2, 3));
console.log(computeSumEnahnced(1, 2, 3, 4, 5, 6, 7));
console.log(computeSumEnahnced(1));
console.log(computeSumEnahnced());


// Example -7 
const computeSumEnahncedWithArr = function (arr) {
    var sum = 0;
    for (var val of arr) sum += val;
    return sum;
}

console.log(computeSumEnahncedWithArr([1, 2]));
console.log(computeSumEnahncedWithArr([1, 2, 3]));
console.log(computeSumEnahncedWithArr([1, 2, 3, 4, 5, 6, 7]));
console.log(computeSumEnahncedWithArr([1]));
console.log(computeSumEnahncedWithArr([]));


let cap = {
    name: "Steve",
    team: "cap",
    petersTeam: function (mem1, mem2) {
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team with members ${mem1} and ${mem2}`);
    }
}
let ironMan = {
    name: "Tony",
    team: "iron man"
}

console.log(cap.petersTeam('loki', 'thor'));

let callTony = cap.petersTeam.bind(ironMan);
callTony('Hulk', 'thor');
// console.log(callTony('Hulk', 'thor'));

cap.petersTeam.call(ironMan, 'Hulk', 'thor');
cap.petersTeam.apply(ironMan, ['Hulk', 'thor']);
