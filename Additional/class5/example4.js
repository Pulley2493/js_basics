class Student {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    // Keyword to return transformed output
    get fullName() {
        return `${this.fName} ${this.lName}`;
    }

    //Keyword to set the full name
    set fullName(fullName) {
        const [firstName, lastName] = fullName.trim().split(" ").filter(elm => elm);
        this.fName = firstName;
        this.lName = lastName;
    }
}

const std = new Student("Ram", "Saini");
console.log(std.fullName);

std.fullName = "   John   Wick ";
console.log(std.fullName); 