

var firstName = "Loki";
let cap = {
    firstName: "Steve",
    sayHi: function () {
        console.log("53", this.firstName);
        const subInner = () => {
            console.log("54", this.firstName);
            const isAmInner = () => {
                console.log("55", this.firstName);
            }

            isAmInner();
        }
        subInner();
    },
}

// cap.sayHi();


"use strict";
var firstName = "Loki";
let cap2 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("53", this.firstName);
        function subInner() {
            console.log("54", this.firstName);
            function isAmInner() {
                console.log("55", this.firstName);
            }

            isAmInner();
        }
        subInner();
    },
}

// cap2.sayHi();


const ladder = {
    stop: 0,
    up() {
        this.stop++;
        // return this;
        return ladder;
    },
    down() {
        this.stop--;
        // return this;
        return ladder;
    },
    showStep: function () {
        console.log(this.stop);
    }
}

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().up().down().showStep();