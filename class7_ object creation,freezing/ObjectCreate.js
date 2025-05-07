function Greeting() {
    (this.greeting = "Hello Anurag"),
        (this.language = "English")
}

Greeting.prototype.sayHello = function () {
    return this.greeting + " Welcome! ";
}


const greeting = new Greeting();
console.log(greeting);

function GreetAnurag() {
    Greeting.call(this); //{}
}

GreetAnurag.prototype = Object.create(Greeting.prototype);

// GreetAnurag.prototype = Greeting.prototype; // toggle with above anc check

const greetAnurag = new GreetAnurag();
console.log(greetAnurag);

console.log(greetAnurag.sayHello());