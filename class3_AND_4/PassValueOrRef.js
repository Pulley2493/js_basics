function func(param1, param2) {
    param1 = 45;
    // param2.a = 30;
    param2 = 50;
}

const a = 20;
const b = {
    a: 35,
}

func(a, b);
console.log(a, b);