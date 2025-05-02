const arr = ["Somya", "Suman", "Arunava"];

arr.push("Nithish");
arr.pop();


arr.unshift("Nithish");
arr.shift();

arr.splice(1, 1); // removes Suman
arr.splice(0, 1, "Sachin");


function generateUsername(email) {
    let parts = email.trim().split("@");
    let usernameChars = parts[0].toLowerCase().split("");
    let username = usernameChars[0].toUpperCase() + usernameChars.slice(1).join("");
    return username;
}

// const email = "";
console.log(generateUsername("chirag@gmail.com"));// Chirag
console.log(generateUsername(" Arati@gmail.com")); // Arati
console.log(generateUsername("SALEEM@gmail.com")); // Saleem

function generateUsernameEnhanced(email) {
    let parts = email.trim().split("@");
    let firstChar = parts[0].charAt(0).toUpperCase();
    let remChar = parts[0].slice(1).toLowerCase();
    return firstChar + remChar;
}

// const email = "";
console.log(generateUsernameEnhanced("chirag@gmail.com"));// Chirag
console.log(generateUsernameEnhanced(" Arati@gmail.com")); // Arati
console.log(generateUsernameEnhanced("SALEEM@gmail.com")); // Saleem



function generateUsernameAdvance(email) {
    let parts = email.trim().split("@");

    let subpartsWithDot = parts[0].split(".");
    let subpartsWithUnderscore = parts[0].split("_");

    let subparts;
    if (subpartsWithDot.length == 2) subparts = subpartsWithDot;
    else subparts = subpartsWithUnderscore;

    const firstName = subparts[0].charAt(0).toUpperCase() + subparts[0].slice(1).toLowerCase();
    const secondName = (subparts[1] && subparts[1].charAt(0).toUpperCase() + subparts[1].slice(1).toLowerCase()) || "";

    return firstName + " " + secondName;
}

// const email = "";
console.log(generateUsernameAdvance("chirag.goyal@gmail.com"));// Chirag
console.log(generateUsernameAdvance(" Arati_patil@gmail.com")); // Arati
console.log(generateUsernameAdvance("SALEEM_basha@gmail.com")); // Saleem
console.log(generateUsernameAdvance("Rehman@gmail.com")); // Saleem



