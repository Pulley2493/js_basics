// class Shape {
//     static totalShapes = 0;

//     constructor(type) {
//         this.type = type;
//         Shape.totalShapes++;
//     }

//     describe() {
//         console.log(`This is a ${this.type}`);
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super('Circle');
//         this.radius = radius;
//     }

//     area() {
//         return Math.PI * this.radius * this.radius;
//     }
// }


// class Rectangle extends Shape {
//     constructor(length, breadth) {
//         super('Rectangle');
//         this.length = length;
//         this.breadth = breadth;
//     }

//     area() {
//         return this.length * this.breadth;
//     }
// }


// const c = new Circle(10);
// c.describe();
// // c.area();
// console.log(c.area());


// const r = new Rectangle(10, 10);
// r.describe();
// // c.area();
// console.log(r.area());

// console.log(Shape.totalShapes);


function Shape(type) {
    this.type = type;
    Shape.totalShapes++;
}

Shape.totalShapes = 0;
Shape.prototype.describe = function () {
    console.log(`This is a ${this.type}`);
}

function Circle(radius) {
    Shape.call(this, 'Circle');
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.area = function () {
    return Math.PI * this.radius * this.radius;
}


function Rectangle(length, breadth) {
    Shape.call(this, 'Rectangle');
    this.length = length;
    this.breadth = breadth;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.area = function () {
    return this.length * this.breadth;
}

const c = new Circle(10);
c.describe();
// c.area();
console.log(c.area());


const r = new Rectangle(10, 10);
r.describe();
// c.area();
console.log(r.area());

console.log(Shape.totalShapes);