class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;

        //Not a good idea since duplicate copy will be created with each instance which doesnt benefit as such
        this.getArea = function () {
            return this.length * this.width;
        }


    }

    // getArea() {
    //     return this.length * this.width;
    // }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

var rectangle1 = new Rectangle(5, 10);

console.log(rectangle1.getPerimeter());
console.log(rectangle1.getArea());