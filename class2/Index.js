"use strict"; // toggle and check all values

console.log("hello from", this);

//this -> window object when called from root file
// IN global execution context this refers to window object
// . || []


//2. for execution context created with method call(calling with object) then this will point to object itself
const captainAmerica = {
    name: 'Steve Roger',
    isAvenger: true,
    address: {
        city: 'brroklyn',
        state: 'new york'
    },
    movies: ["first avenger", "civil war", "infinity war"],
    saveTheWorld: function () {
        console.log("on the way ! consider done", this);
    }

}

captainAmerica.saveTheWorld();

// 3. for execution context created with function call (calling without object), this will point to window function
// in strict mode this points to undefined
const obj = {};
function abc() {
    console.log(obj); // Shadowing
    console.log("Inside abc", this);
}

abc();

const saveTheWorld1 = function () {
    console.log("on the way ! consider done", this); // window
}

saveTheWorld1();


const captainAmerica1 = {
    name: 'Steve Roger',
    isAvenger: true,
    address: {
        city: 'brroklyn',
        state: 'new york'
    },
    movies: ["first avenger", "civil war", "infinity war"],
    saveTheWorld: function () {
        console.log("on the way 1! consider done", this); // captainAmerica1
        function abc() {
            console.log("Inside abc1", this); // window
        }

        abc();
    }

}

captainAmerica1.saveTheWorld();


// arrow function

//4. arrow function doesnt have own this, how does this works in this context
// it refers to parent context this
const cde = () => {
    console.log('from arrow function', this);
}

cde();


const captainAmerica2 = {
    name: 'Steve Roger',
    isAvenger: true,
    address: {
        city: 'brroklyn',
        state: 'new york'
    },
    movies: ["first avenger", "civil war", "infinity war"],
    saveTheWorld: function () {
        console.log("on the way 2! consider done", this); // captainAmerica1
        const abc = () => {
            console.log("Inside abc2", this); // window
        }

        abc();
    }

}

captainAmerica2.saveTheWorld();