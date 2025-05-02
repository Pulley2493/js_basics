// static methods

class MathUtils {
    static PI = 3.14;// constants which doesnt change use static

    static add(a, b) { // static values can be changed but not recommended, avoiding is possible
        return a + b;
    }

    constructor() {
        this.name = "MathUtils";
    }
}

const PI = MathUtils.PI;
const result = MathUtils.add(5, 10);