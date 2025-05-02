// // Constructor Function
// function Person(age) {
//     this.name = "John Doe";
//     this.age = age;
//     this.greet = function () {
//         console.log("Hello, my name is " + this.name);
//     }
// }

// Person.prototype.introduce = function () {
//     console.log("I am " + this.age + " years old");
// }

// const person1 = new Person(28);
// const person2 = new Person(30);

// person1.introduce();
// person2.introduce();

// person1.greet();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.greet = function () {
            console.log("Hello, my name is " + this.name);
        }

    }

    introduce() {
        console.log("I am " + this.age + " years old");
    }
}

const person1 = new Person("Pulkt", 32);
const person2 = new Person("Ram", 21);

person1.introduce();
person2.introduce();

person2.greet();

