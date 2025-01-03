// class Person {
//     //name, age
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet = () => {
//         console.log(`Hi, My name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person = new Person("John", 42);
// const person1 = new Person("Ankit", 21);
// console.log(person);
// person.greet();


// reusable object --> constructor function
// function name must start with capital letter
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function () {
//     console.log(`Hi, My name is ${this.name} and I am ${this.age} years old.`);
// }

// const person = new Person("John", 42);
// // const person1 = new Person("Ankit", 21);
// console.log(person);
// person.greet();


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     makeSound() {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

//     makeSound() {
//         console.log(`${this.name}, this ${this.breed}, barks`);
//     }
// }

// const dog = new Dog("Duke", "Begal");

// console.log(dog);

// dog.makeSound();

// new Animal("Cow").makeSound();


// w/t using class

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.makeSound = function () {
//     console.log(`${this.name} makes a sound`);
// }

// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype.makeSound = function () {
//     console.log(`${this.name}, this ${this.breed}, barks`);
// }

// Object.setPrototypeOf(Dog.prototype, Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype); // copies entire prototype chain
// Dog.prototype.constructor = Dog;
// Dog.prototype.makeSound = function () {
//     console.log(`${this.name}, this ${this.breed}, barks`);
// }


// Dog.prototype = { ...Animal.prototype } // doesnt work since only one level copy


// const dog = new Dog("Duke", "Begal");

// console.log(dog);

// dog.makeSound();





// static -- doesnt belong to object but to class or constructor function(there is no need to create object)
// eg: Array.isArray()


// class MathHelper {
//     static add(a, b) {
//         return a + b;
//     }

//     static subtract(a, b) {
//         return a - b;
//     }
// }

// console.log(MathHelper.add(1, 2));
// console.log(MathHelper.subtract(5, 3));


function MathHelper() {

}

MathHelper.add = function (a, b) {
    return a + b;
}

MathHelper.subtract = function (a, b) {
    return a - b;
}


const math = new MathHelper();
// math.add(); // not a function
console.log(MathHelper.add(1, 2));
console.log(MathHelper.subtract(5, 3));


// function Counter() {

// }

// Counter.count = 0;
// Counter.increment = function () {
//     Counter.count++;
// }

// Counter.increment();
// Counter.increment();
// console.log(Counter.count);


class Counter {
    static count = 0;
    static increment() {
        this.count++;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.count);