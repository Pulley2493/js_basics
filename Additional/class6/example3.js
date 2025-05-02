
//HW 
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        debugger;
        if (!cache[key]) cache[key] = fn(...args);
        return cache[key];
    }
}

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        // debugger;
        if (!cache.has(key)) {
            debugger;
            cache.set(key, fn(...args));
        }
        return cache.get(key)
    }
}

function add(a, b) {
    return a + b;
}

const memoizeAdd = memoize(
    add
);


console.log(memoizeAdd(1, 2)); // 3 calculating
console.log(memoizeAdd(1, 2)); // 3 (cached result)
console.log(memoizeAdd(2, 3)); // 5 calculating
memoizeAdd(2, 3); // 5 (cached result)
memoizeAdd(1, 2); // 3 (cached result)