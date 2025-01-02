const arr = [1, 2, 3, 4, 5];


// add an element to last indice
arr.push(6);
console.log(arr);

//remove last element 
arr.pop();
console.log(arr);

//add an element at start
arr.unshift(0);
console.log(arr);

//remove an element at start
arr.shift();
console.log(arr);


//splice
// add, removing and replacing
// [1,2,3,4,5]
// starting index and delete count
// const arr1 = arr.splice(1, 2);
// console.log(arr1);
// console.log(arr);

//starting index = 1, no of item to be deleted is 1  and add 6,7,8
// const arr1 = arr.splice(1, 1, 6, 7, 8);
// console.log(arr1, arr);


// slice --> slice the piece of cake , uses start and end index, original array not modified
//start index, last index and last index val not included
// const arr2 = arr.slice(1, 4); // end index non exclusive
// const arr3 = arr.splice(1, 3);
// console.log(arr2, arr3, arr);



// const arr3 = [9, 10, 11];
// const arr4 = arr.concat(arr3);
// console.log(arr, arr3, arr4);

// console.log([...arr, ...arr3]);


//split
const str = "Hi I \" am google";
const strArr = str.split(/"/);
console.log(strArr);

const mergedStr = strArr.join("\\\"");
console.log(mergedStr);