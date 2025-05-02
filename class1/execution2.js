
var a = 10;
console.log(a);


// function fn() {
//     console.log(a);
//     var a = 20;
//     console.log(a);
//     a++;
//     console.log(a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log(a);
//     }
//     console.log(a);
// }

// function fn() {
//     var a = 20;
//     console.log(a);
//     a++;
//     console.log(a);
//     if (a) {
//         let a = 30;
//         a++;
//         // if (a) {
//         //     var a = 42;
//         // }
//         console.log(a);
//     }
//     console.log(a);
// }

// function fn() {
//     let a = 20;
//     console.log(a);
//     a++;
//     console.log(a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log(a);
//     }
//     console.log(a);
// }

function fn() {
    let a = 20;
    console.log(this);
    a++;
    console.log(a);
    if (true) {
        let a = 45;
    }

    if (a) {
        a = 30;
        a++;
        console.log(a);
    }
    console.log(a);
}

fn();
console.log(a);