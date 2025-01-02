

const cap = {
    name: 'Steve',
    team: 'cap',
    petersTeam: function (mem1, mem2) {
        console.log(`hey ${this.name} am your spiderman and I belong to ${this.team}`);
        console.log(`I am working with ${mem1} ${mem2}`);
    }
}

// cap.petersTeam("Nayal", "Adil");


let ironman = {
    name: 'Tony Stark',
    team: 'Iron man',
}




// cap.petersTeam.call(ironman, "Nayal", "Adil");

Function.prototype.myCall = function (objOnWhichReqFnToInvoke, ...params) {
    console.log("this", this);
    const requiredFn = this;
    // ironmanx

    objOnWhichReqFnToInvoke.requiredFn = requiredFn;
    objOnWhichReqFnToInvoke.requiredFn(...params);
    delete objOnWhichReqFnToInvoke.requiredFn;
}


// cap.petersTeam.myCall(ironman, "Nayak", "Adil");


// cap.petersTeam.apply(ironman, ["Nayal", "Adil"]);

Function.prototype.myApply = function (objOnWhichReqFnToInvoke, params) {
    console.log("this", this);
    const requiredFn = this;
    // ironmanx

    objOnWhichReqFnToInvoke.requiredFn = requiredFn;
    objOnWhichReqFnToInvoke.requiredFn(...params);
    delete objOnWhichReqFnToInvoke.requiredFn;
}


// cap.petersTeam.myApply(ironman, ["Nayak", "Adil"]);


Function.prototype.myBind = function (thisObj, ...params) {

    // const reqFn = this;
    // return function (...params1) { // Doesn't use parent context hence function to be stored in var
    //     return reqFn.myCall(thisObj, ...params, ...params1);
    // }

    // OR

    return (...params1) => { // Will use context of parent
        return this.myCall(thisObj, ...params, ...params1);
    }
}
let bindedFn = cap.petersTeam.myBind(ironman, "Nayak");
// bindedFn("Adl");


// Using Symbol


// cap.petersTeam.call(ironman, "Nayal", "Adil");

Function.prototype.myCallSym = function (objOnWhichReqFnToInvoke, ...params) {
    console.log("this", this);
    const requiredFn = this;
    // ironmanx

    if (typeof requiredFn !== "function") {
        throw new Error(this, "is not a function");
    }

    if (!objOnWhichReqFnToInvoke || typeof objOnWhichReqFnToInvoke !== "object") {
        throw new Error(this, "is not a object");
    }

    const fnSymbol = Symbol(objOnWhichReqFnToInvoke.name);

    objOnWhichReqFnToInvoke[fnSymbol] = requiredFn;
    objOnWhichReqFnToInvoke[fnSymbol](...params);
    delete objOnWhichReqFnToInvoke[fnSymbol];
}


// cap.petersTeam.myCallSym(ironman, "Nayak", "Adil");



// cap.petersTeam.apply(ironman, ["Nayal", "Adil"]);

Function.prototype.myApplySym = function (objOnWhichReqFnToInvoke, params) {
    console.log("this", this);
    const requiredFn = this;
    // ironmanx


    const fnSymbol = Symbol(objOnWhichReqFnToInvoke.name);

    objOnWhichReqFnToInvoke[fnSymbol] = requiredFn;
    objOnWhichReqFnToInvoke[fnSymbol](...params);
}


cap.petersTeam.myApply(ironman, ["Nayak", "Adil"]);



// ironManStoleCapTeamFunc("Deen", "Dayal");