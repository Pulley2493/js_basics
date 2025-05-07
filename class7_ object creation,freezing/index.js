
// Object creation methods
// 1. a = {} => objects literal

const person = {
    firstName: "surya",
    lastName: "reddy",
    printFullName: function () {
        console.log(this.firstName, " ", this.lastName);
    }
};

console.log(person);

person.printFullName();


//2. Factory Method/function(same type of object with diff params)

// Closure: Function along with lexical scope 

function FactoryPerson(fName, lName) {
    return {
        firstName: fName,
        lastName: lName,
        printFullName: function () {
            console.log(this.firstName, " ", this.lastName);
        }
    }
}

const fPerson1 = FactoryPerson("Srinivas", "Moore");
const fPerson2 = FactoryPerson("Pratik", "wadekar");
console.log(fPerson1);
fPerson1.printFullName();
fPerson2.printFullName();


//3. constructor function
// name of function should be starting with capital letter

function ConstructorPerson(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.printFullName = function () {
        console.log(fName, " ", lName);
    }
    return this;
}

const constructorPerson1 = new ConstructorPerson("Srinivas", "Chakka");
const constructorPerson2 = ConstructorPerson("Pratik", "wadekar");

const constructorPerson3 = ConstructorPerson("Iron", "Man"); //Overriding Pratik Wadekar


console.log(constructorPerson1);
constructorPerson1.printFullName();
constructorPerson2.printFullName(); // error
constructorPerson3.printFullName();


//4. using Object 

const oPerson = new Object();
//oPerson : {}
oPerson.firstName = "Sheela";
oPerson.lastName = "N";
oPerson.printFullName = function () {// Change to arrow and check
    //console.log(firstName, " ", lastName);// Checks in GEC

    console.log(this.firstName, " ", this.lastName);// Checks in GEC

}

oPerson.printFullName();


//5. Object.create

const objCreate = Object.create(null);
objCreate.firstName = "Sheela";
objCreate.lastName = "N";
objCreate.printFullName = function () {
    console.log(this.firstName, " ", this.lastName);// Checks in GEC

}

// const fn = (printFullName = function () {
//     console.log(this.firstName, " ", this.lastName);// Checks in GEC

// });

const fn = (function () {
    console.log(this.firstName, " ", this.lastName);// Checks in GEC

});

objCreate.printFullName();

const objCreateWithProto = Object.create(fn);
objCreateWithProto.firstName = "Sheela";
objCreateWithProto.lastName = "N";

//objCreateWithProto.printFullName(); -- error top check later


// 2nd example
// creating the prototype for object that will be created later
function greeting() {
    this.greeting = "Hello Muthu!";
}

//using the object.creat() method to create a function whose object inherits
//properties from the prototype
function greetMuthu() {
    greeting.call(this);
}

// creating an greetMuthu function object with the prototype object's properties (such as 


greetMuthu.prototype = Object.create(greeting.prototype);

//greetMuthu -> parent obj -> greeting prototype
const app = new greetMuthu();
// app -> prototype --> greeting prototype

//displaying the object created
console.log(app.greeting); // O/p: Hello Muthu!

//greetMuthu


//6. ES6 classes
class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    printFullName = function () {
        console.log(this.firstName, this.lastName);
    }
}

const PersonClass = new Person("Aditya", "Chava");
console.log(PersonClass);
PersonClass.printFullName();


//7. Object.assign, spread operator

const assign = Object.assign({}, PersonClass);
assign.printFullName();

const objSpread = { ...person };
objSpread.printFullName();