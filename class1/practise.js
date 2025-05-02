console.log('Welcome to Testing, current val', testStr);


// function testStr() {
//     console.log("Printing Test String");
// }


// testStr();

var testStr = "Somthing";
// console.log('Before Val', testStr);
// testStr = 10;
// console.log('Final Val', testStr);



// var test = "true";
// {
//     var testStr = "Something Changed";
// }

console.log('Updated, current val', testStr);
function modifyTest() {
    // testStr = "Modified Test";
    console.log('Changed Val', testStr);
    function againModifyTest() {
        console.log("Inside Again modify1 , val", testStr);
        var testStr = "Again Modified";
        console.log("Inside Again modify 2, val", testStr);

    }
    againModifyTest();
    console.log("Modified Ended,val", testStr);
}
modifyTest();
console.log("Ended, final val", testStr)
