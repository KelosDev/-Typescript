let currentAge: number = 28;
let maxAge: number = 90;
let coffeePerDay: number = 2;

// how much coffe you would drink for the rest of your life?

let dayPerYear: number = 365;
let coffeePerYears:number = coffeePerDay * dayPerYear;
let yearsLeft:number = maxAge - currentAge;
let totalCoffee:number = coffeePerYears * yearsLeft;

console.log(`You will need ${totalCoffee} cups of coffee to last you until the ripe old age of ${maxAge}`);
