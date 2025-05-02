let cap = {
    name: "Steve",
    "last name": 'Roger',
    isAvenger: true,
    address: {
        city: "New Delhi",
        country: "India"
    },
    saHi: function () {
        console.log("Cap Says Hii");
    },
    movies: ["Avenger", "Civil War"]
}

console.log(cap);
console.log(cap.name);
console.log(cap.isAvenger);
cap.saHi()
console.log(cap.saHi);
console.log(cap.address);
console.log(cap['last name']);

let x = "isAvenger";
console.log(cap.x);
console.log(cap[x]);

for (let key in cap) {
    console.log(key, ' ', cap[key]);
}

console.log(JSON.stringify(cap));
const dataToServer = JSON.stringify(cap);

console.log(dataToServer);

const dataFronServer = dataToServer;
const serverResponseJS = JSON.parse(dataFronServer);
console.log(serverResponseJS);