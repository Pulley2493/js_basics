//functions

function fn(param) {
    console.log("hello world", param);
}


const argument = "adil";
// fn(argument);


fn(); // prints undefined

// not defined(reference error) -- if variable used is not present in the document then it will result in not defined error(absence of declaration)
// fn(arg); // errors out that arg is not defined

let arg;
fn(arg); // prints undefined

// in js all variables are initialised with undefined before execution of code.


// objects
const captainAmerica = {
    name: 'Steve Roger',
    isAvenger: true,
    address: {
        city: 'brooklyn',
        state: 'new york',
    },
    movies: ["first Avenger", "civil war", "infinity war"],
    saveTheWorld: function () {
        console.log("On the way ! consider it done");
    },
    true: 1,
    1: 2,
}


// key: string or number
// value: any primitive or non primitive data type

console.log(captainAmerica);
console.log(captainAmerica.address);
// console.log(captainAmerica[movies]); // error movies not defined in JS

const movies = "movies";
console.log(captainAmerica[movies]);


// on  object for in

for (let key in captainAmerica) {
    // console.log(captainAmerica.key); // undefined


    if (key === "movies") {
        console.log(Array.isArray(captainAmerica.movies), " Array type");
    }
    console.log(typeof captainAmerica[key], " ", key);
    // console.log(typeof key, " ", key);
    // console.log(captainAmerica[key]);
}
