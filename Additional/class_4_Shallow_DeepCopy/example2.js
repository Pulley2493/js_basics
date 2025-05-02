const arr = [1, 2, [3, 4], [5, [6, 7]]];


// Output: [1,2,3,4,5,6,7]
const flatten = (arr, flattenArr = []) => {
    for (let elem of arr) {
        if (Array.isArray(elem)) flatten(elem, flattenArr);
        else flattenArr.push(elem);
    }
    return flattenArr;
};

console.log(arr);
console.log('Enhance 0 :: ', flatten(arr));

const flattenEnhance1 = (arr) => {
    let flattenArr = [];
    for (let elem of arr) {
        if (Array.isArray(elem)) flattenArr = flattenArr.concat(flattenEnhance1(elem));
        else flattenArr.push(elem);
    }
    return flattenArr;
};

console.log(arr);
console.log('Enhance 1 :: ', flattenEnhance1(arr));

const flattenEnhance2 = (arr) => {
    let flattenArr = [];
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            let internalFlattenArr = flattenEnhance2(elem);
            for (let elemInternal of internalFlattenArr) flattenArr.push(elemInternal);
        }
        else flattenArr.push(elem);
    }
    return flattenArr;
};

console.log(arr);
console.log('Enhance 2 :: ', flattenEnhance2(arr));


const flattenEnhance3 = (arr) => {
    let flattenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) flattenArr.push(arr[i]);
        else {
            const flattenArrInt = flattenEnhance3(arr[i]);
            flattenArr.push(...flattenArrInt);
        }
    }
    return flattenArr;
};

console.log(arr);
console.log('Enhance 3 :: ', flattenEnhance3(arr));

// Pure way, impure function
const flattenEnhance4 = (arr) => {
    // let flattenArr = [];
    this.flattenArr = [];
    let flatten = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i])) this.flattenArr.push(arr[i]);
            else {
                flatten(arr[i]);
            }
        }
    }
    flatten(arr);
    let arr3 = this.flattenArr;
    delete this.flattenArr;
    return arr3;
};

console.log(arr);
console.log('Enhance 4 :: ', flattenEnhance4(arr));