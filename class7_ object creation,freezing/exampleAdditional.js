
const marriageBioData = {
    name: 'Somya',
    age: 25,
    city: 'Jaipur',
    workEx: [
        {
            company: 'Netapp',
            exp: 2,
            role: "Intern"
        },
        {
            company: 'Netapp',
            exp: 2,
            role: "S E"
        }
    ]
}

console.log(marriageBioData['city']);

console.log(marriageBioData['city']);


const obj1 = {
    name: "Nithilesh",
    city: "Bangalore"
};

const obj2 = Object.create(obj1);

obj2['isMarried'] = true;

for (let key in obj2) console.log(key);

console.log(Object.keys(obj2));

Object.freeze(obj2);
obj2['isMarried'] = false;
obj2['name'] = 'nithilesh';




const obj4 = {};
Object.defineProperty(obj4, 'name', {
    value: 'Saptarshi',
});
Object.defineProperty(obj4, 'age', {
    value: 21,
});

Object.defineProperty(obj4, 'city', {
    value: 'CA',
    enumerable: true
});

Object.defineProperty(obj4, 'salary', {
    value: 10000000,
    enumerable: true,
    configurable: true
});

console.log(obj4);

console.log(Object.keys(obj4));
for (let key in obj4) console.log(key);

console.log(Object.getOwnPropertyDescriptor(obj4, 'name'));

var obj5 = {
    name: 'Praveen',
    salary: 100000000
}

Object.freeze(obj5);
Object.getOwnPropertyDescriptor(obj5);

// in strict mode it will error out as per above rule