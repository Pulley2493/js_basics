class ClassName {
    constructor(name, age) {
        this._name = name; // underscore is for private internal keys which shouldnt be used outside by other modules
        this._age = age;
    }

    // set name(name) {
    //     this.name = name;
    // }

    // get name() {
    //     return this.name;
    // }

    get age() {
        return this._age;
    }

    set age(num) {
        if (num < 0) {
            console.log("Age cannot be negative", num);
            return;
        }
        this._age = num;
    }
}

const person1 = new ClassName("Rasagna", 25);
console.log(person1.name);
// console.log(person1.setName("Sachin"));
// console.log(person1.getName());


person1.name = "Steve";
console.log(person1.name);

person1.age = -1;//Validation applies during setter

person1.age = 31;
console.log(person1.age);


