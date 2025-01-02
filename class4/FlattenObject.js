const myFlat = function (obj, prefKey) {
    if (!obj || typeof obj !== 'object') throw new Error("It should be object to flatten");

    let copyObj = {};
    for (const key in obj) {
        const elem = obj[key];

        if (Array.isArray(elem) || typeof elem === 'function') throw new Error("It should be object to flatten");
        const compositKey = prefKey ? prefKey + "." + key : key;

        if (typeof elem === 'object') {
            Object.assign(copyObj, myFlat(elem, compositKey));
        } else {
            copyObj[compositKey] = elem;
        }
    }
    return copyObj;
}

const a = { 'a': 1, 'b': 'c', 'd': { 'e': { 'd': 1 } } };
console.log(myFlat(a));