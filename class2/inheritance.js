const arr = [1, 2, 3, 4];
console.log(typeof arr); // object

arr.push(12);
console.log(arr);

//reuse of the code
//save up memory

// next usecase is whatif i want to create reusable method

Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    console.log(sum);
}


// function sum(arr){
//     this = arr;
//     let sum = 0;
//     for (let i = 0; i < this.length; i++) {
//         sum += this[i];
//     }
//     console.log(sum);
// }