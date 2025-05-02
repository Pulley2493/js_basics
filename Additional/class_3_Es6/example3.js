


Array.prototype.mySum = function () {
    // Get the array
    const arr = this;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5];
arr.mySum();


const arr2 = [10, 20, 30, 40];
arr2.mySum();


Function.prototype.callCustom = function (obj, ...args) {
    // Get the array
    obj.fn = this;
    return obj.fn(...args);
}

Function.prototype.myCall = function (context, ...args) {
    console.log(context, args);

    context.reqFn = this;

    var op = context.reqFn(...args);
    delete context.reqFn;
    return op;
}

Function.prototype.myApply = function (context, args) {
    console.log(context, args);

    context.reqFn = this;

    var op = context.reqFn(...args);
    delete context.reqFn;
    return op;
}


Function.prototype.myBind = function (context) {
    // console.log(context, args);

    context.reqFn = this;

    return function (...args) {
        var op = context.reqFn(...args);
        delete context.reqFn;
        return op;
    }
}

Function.prototype.myBind = function (context) {
    // console.log(context, args);

    const reqFn = this;

    return function (...args) {
        return reqFn.myCall(context, ...args);
    }
}