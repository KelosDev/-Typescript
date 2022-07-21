function calculateSupply(age: number, coffePerDay: number) {
    let maxAge:number = 90;
    let yearsLeft : number = maxAge - age;
    let dayInYear:number = 365;
    let totalDays:number = dayInYear*yearsLeft;
    let totalCoffee : number = totalDays*coffePerDay;
    let literPerCoffee: number = 0.3;
    let totalLiters:number = literPerCoffee*totalCoffee;
    console.log(`You will need ${totalCoffee} cups of coffee to last you until the ripe old age of ${maxAge}`);
    console.log(`You will drink ${Math.round(totalLiters)} liters of coffee`);
        
}

calculateSupply(28,3);
calculateSupply(40,2);
calculateSupply(15,1);