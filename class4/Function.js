// function defintion vs expression


//function expression-- old way
// abc();
function abc() {
    console.log("abc");
}

//function expression
// abc3();// error called before initialization due to hoisting
const abc3 = function () { // Anonymous function expression
    console.log("abc");
}

// no use of function name near to open curly braces
const abc1 = function abc() {
    // console.log("abc");
    console.log(this);
}

const abc2 = () => {
    // console.log("abc");
    console.log(this);
}


const obj = {
    abc1,
    abc2,
};


obj.abc1();
obj.abc2();
