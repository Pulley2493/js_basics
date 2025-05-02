function b() {
    console.log(a); // error
}

function fn() {
    var a = 1;
    b();
    console.log(a);
}


fn();


function fn() {
    var a = 1;
    function b() {
        console.log(a);// 1
    }
    b();
    console.log(a); //1
}


fn();


function fn() {
    var a = 1;
    function b() {
        var a;
        console.log(a);// undefined
    }
    b();
    console.log(a); //1
}


fn();



var varName = 10;
function b() {
    console.log(varName);
}

function fn() {
    var varName = 20;
    b();
    console.log(varName);
}

fn();

