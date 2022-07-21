"use strict";
function calculateSupply(age, coffePerDay) {
    let maxAge = 90;
    let yearsLeft = maxAge - age;
    let dayInYear = 365;
    let totalDays = dayInYear * yearsLeft;
    let totalCoffee = totalDays * coffePerDay;
    let literPerCoffee = 0.3;
    let totalLiters = literPerCoffee * totalCoffee;
    console.log(`You will need ${totalCoffee} cups of coffee to last you until the ripe old age of ${maxAge}`);
    console.log(`You will drink ${Math.round(totalLiters)} liters of coffee`);
}
calculateSupply(28, 3);
calculateSupply(40, 2);
calculateSupply(15, 1);
