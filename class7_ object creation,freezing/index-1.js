
const candidate = {
    fly: true,
    canTalk: function () {
        return "Sorry, can't talk";
    },
}

const user = {
    Cancook: true,
    canCode() {
        return "cant code";
    },
    // inherits properties, object way to inherit properties
    __proto__: candidate,
}

console.log(user.fly);

class candidate1 {
    constructor() {
        this.fly = true;
    }
    canTalk = function () {
        return "Sorry, cant talk";
    };
}

class user1 extends candidate1 {
    constructor() {
        super();
        this.canCook = true;

    }
    canCode() {
        return "cant code";
    };
}

let userClassObj = new user1();
console.log(userClassObj.canTalk());

const mergedObject = Object.assign(user, candidate);
console.log(mergedObject.canTalk());