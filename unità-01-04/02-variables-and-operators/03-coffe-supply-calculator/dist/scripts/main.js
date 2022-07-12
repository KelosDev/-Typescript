"use strict";
let currentAge = 28;
let maxAge = 90;
let coffeePerDay = 2;
// how much coffe you would drink for the rest of your life?
let dayPerYear = 365;
let coffeePerYears = coffeePerDay * dayPerYear;
let yearsLeft = maxAge - currentAge;
let totalCoffee = coffeePerYears * yearsLeft;
console.log(`You will need ${totalCoffee} cups of coffee to last you until the ripe old age of ${maxAge}`);
