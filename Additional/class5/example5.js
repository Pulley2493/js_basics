// Inheritance in JS

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting ${this.make} ${this.model}`);
    }

    stop() {
        console.log(`Stopping ${this.make} ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
        super(make, model);
        this.batteryCapacity = batteryCapacity;
    }

    charge() {
        console.log(`Charging ${this.make} ${this.model}`);
    }
}

const tesla = new ElectricCar("Tesla", "Model S", 50000);

tesla.charge();
tesla.start();
tesla.stop();
// const tiago = new ElectricCar("Tesla", "Model");