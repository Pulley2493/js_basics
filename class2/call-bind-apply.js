
const cap = {
    name: 'Steve',
    team: 'cap',
    petersTeam: function (mem1, mem2) {
        console.log(`hey ${this.name} am your spiderman and I belong to ${this.team}`);
        console.log(`I am working with ${mem1} ${mem2}`);
    }
}

cap.petersTeam("Nayal", "Adil");

// const ironman = {
//     name: 'Tony Stark',
//     team: 'Iron man',
//     //DRY breaking
//     petersTeam: function (mem1, mem2) {
//         console.log(`hey ${this.name} am your spiderman and I belong to ${this.team}`);
//         console.log(`I am working with ${mem1} ${mem2}`);
//     }
// }

// ironman.petersTeam('Ram', 'Shyam');

const ironman = {
    name: 'Tony Stark',
    team: 'Iron man',
}

console.log(Object.getPrototypeOf(Object.getPrototypeOf(ironman)));
// ironman.prototype.petersTeam = cap.petersTeam; // invalid

Object.getPrototypeOf(ironman).petersTeam = cap.petersTeam;
ironman.petersTeam('Ram', 'Shyam');


// this points to ironman while using cap.petersTeam

// call, apply, bind
// function borrowing from the object and helps us with chaning this object

cap.petersTeam.call(ironman, "Nayal", "Adil");
cap.petersTeam.apply(ironman, ["Nayal", "Adil"]);

// bind = store a function which is binded with this context (what ever context you prefer)
// when we want to use the method multiple times

const ironManStoleCapTeamFunc = cap.petersTeam.bind(ironman);
console.log(ironManStoleCapTeamFunc);

ironManStoleCapTeamFunc("Deen", "Dayal");