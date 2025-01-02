// input array: [1,2,3,[4,5,6],[7,8],9]
// output: [1,2,3,4,5,6,7,8,9]

const myFlat = function (arr) {
    if (!arr || !Array.isArray(arr)) {
        throw new Error("Expected params must be array");
    }

    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (Array.isArray(elem)) {
            const smallArr = myFlat(elem);
            console.log("Small arr", smallArr);
            newArr.push(...myFlat(elem));
        } else {
            newArr.push(elem);
        }
    }
    return newArr;
}

const arr = [1, 2, 3, [4, [5, 6]], [7, 8], 9];
const res = myFlat(arr);
console.log("W/t flatten", arr);
console.log("Post flat", res);
