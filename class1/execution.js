var a = 10;

function fn() {
    console.log("I am fn"); // 1

    function inner() {
        console.log("I am inner"); // 2
    }

    inner();
    var c = 10;
    console.log(c);
}

fn();

var b = 10;
console.log(b);

console.log(c);
var c = 20;

console.log(c);


// console.log(d); // avoids ambiguous error
// console.log(e); // avoids ambiguous error
let d = 30;
const e = 40;
console.log(d, " ", e);


//let and const are block scoped
