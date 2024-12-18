let fruits = "orange";
console.log(fruits);

{
    // console.log(fruits); // error generated -- temporal dead zone
    let fruits = "apple";
    console.log(fruits);
    {
        console.log(fruits);
        let fruits;
        // fruits = "Green Aple";
    }

    console.log(fruits);
}


console.log(fruits);